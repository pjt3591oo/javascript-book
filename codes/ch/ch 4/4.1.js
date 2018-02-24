const express = require('express');
const app = express();

const http = require('http')

app.get('/', (req, res, next) => {
  res.send('hello world!!');
});

app.post('/', (req, res, next) => {
  res.send('/ POST 요청');
});

app.get('/users', (req, res, next) => {
  res.send('/users GET요청');
});

app.post('/user', (req, res, next) => {
  res.send('/user POST 요청');
});

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
