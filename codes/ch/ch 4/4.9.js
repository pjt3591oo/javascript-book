const express = require('express');
const app = express();

const http = require('http')

// 각종 미들웨어 등록 . . .

app.get('/:id', (req, res, next) => {
    let id = req.params.id
    if(id == 1){
        next('error 발생')
    }else{
        res.send('hello world')
    }
})

// 각종 라우터 등록 . . .

app.use((req, res, next) => {
    console.log('404')
    res.status(404).send('<h1>Not Found Page</h1>')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send(err)
})

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
