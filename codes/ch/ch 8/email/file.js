const fs = require('fs')
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service:'Gmail',
    auth: {
        user: 'Gmail 계정',
        pass: 'Gmail 계정'
    },
    host: 'smtp.gmail.com',
    port: "465"
});

fs.readFile('./test.txt', (err, data)=>{
    let mailOptions = {
        from :'sender <보내는 사람 mail 계정>',
        to: '받는사람 메일',
        subject: 'email 테스팅중 - 첨부파일 테스트',
        text: '안녕하세요',
        attachments: [{'filename': 'test.txt', 'content': data}]
    };

    transporter.sendMail(mailOptions,  (err, info) => {
        transporter.close();
        if (err) {
            console.log(err);
        }
        console.log(info)
    });
})
