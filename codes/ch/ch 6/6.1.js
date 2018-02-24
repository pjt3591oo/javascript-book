const mysql = require('mysql')

let db = mysql.createConnection({
    host:'127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'boards'
})

db.query('SELECT *FROM users', (err, data) => {
    if(err) console.log('err 발생 : ' + err)
    else {
        data.map(item => {
            console.log(`유저아이디: ${item.id}, 유저이름: ${item.name}, 유저 나이: ${item.age}`)
        })
    }
})
