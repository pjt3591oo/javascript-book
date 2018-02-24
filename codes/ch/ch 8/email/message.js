const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'Gmail',
    auth: {
        user: 'Gmail 계정',
        pass: 'Gmail 계정'
    },
    host: 'smtp.gmail.com',
    port: "465"
});

let mailOptions = {
    from :'sender <보내는 사람 mail 계정>',
    to: '받는사람 메일',
    subject: 'email 테스팅중',
    text: '안녕하세요'
};

transporter.sendMail(mailOptions,  (err, info) => {
    transporter.close();
    if (err) {
        console.log(err);
    }
    console.log(info)
});
