const express = require('express')
let app = express()

const http = require('http')
let server = http.createServer(app)

const socket = require('socket.io')
let io = socket(server)

server.listen(3001, () => {
    console.log('server on 3000 Port')
})

let chat = io.of('/chat').on('connection', (socket) => {

    socket.on('everyBodySend', (msg) =>{ // 클라이언트 이벤트 받기
        // socket.broadcast.emit('everyBodySend', msg) // 클라이언트에게 이벤트 주기
        socket.emit('everyBodySend', msg) // 클라이언트에게 이벤트 주기
    })
})
