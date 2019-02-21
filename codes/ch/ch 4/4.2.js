const express = require('express');
const app = express();

const bodyParser  = require('body-parser');
const http = require('http')

const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/user/:id", (req, res, next) => {
  let params = req.params;
  let querys = req.query;
  console.log(params, querys);
  res.send("hello world!!");
});

app.post("/", (req, res, next) => {
  let body = req.body;
  console.log(body);
  console.log(body.t);
  res.send("/ POST 요청");
});

http.createServer(app).listen(3000, () => {
  console.log("server on: 3000 PORT");
});


app.get('/user/:id', (req, res, next) => {
  let params = req.params;
  let querys = req.query;
  console.log(params, querys)
  res.send('hello world!!');
});

app.post('/', (req, res, next) => {
  let body = req.body
  console.log(body)
  res.send('/ POST 요청');
});

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
