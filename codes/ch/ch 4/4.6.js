const express = require('express');
const app = express();

const http = require('http')

app.use((req, res, next) => { // 미들웨어 등록
    console.log('첫 번째 미들웨어')
    next()
})

app.get('/', (req, res, next) => { // 미들웨어 등록
    res.send('hello world')
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
