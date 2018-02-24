const express = require('express');
const app = express();

const http = require('http')

const users = require('./users.js')
const boards = require('./boards.js')

app.use('/users', users)
app.use('/boards', boards)

http.createServer(app).listen(3000, () => {
    console.log('server on: 3000 PORT')
})
