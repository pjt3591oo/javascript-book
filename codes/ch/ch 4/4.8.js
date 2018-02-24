const express = require('express');
const app = express();

const http = require('http')

const firstMiddleware = (req, res, next) => {
    console.log('첫 번째 미들웨어')
    next()
}

app.get('/', firstMiddleware, firstMiddleware,firstMiddleware,(req, res, next) => {
    res.send('hello world 1')
})

app.get('/user', (req, res, next) => {
    res.send('hello world 2')
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
