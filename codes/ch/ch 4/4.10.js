const express = require('express');
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const http = require('http')

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: 5000000}));
app.use(cookieParser());

app.get('/', (req, res, next) => {
    res.send('hello world')
})

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
