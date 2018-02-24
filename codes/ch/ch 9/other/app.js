const express = require('express')
let app = express()

const http = require('http')
let server = http.createServer(app)

const socket = require('socket.io')
let io = socket(server)

server.listen(3001, () => { console.log('server on 3000 Port') })

let memberInfoName= {} // {name: {name: '', id: ''}}
let memberInfoId= {} // {id: {name: '', id: ''}}

let chat = io.of('/chat').on('connection', (socket) => {

    socket.on('everyBodySend', (msg) =>{
        chat.emit('everyBodySend', msg)
    })
    socket.on('registry', (msg) => {
        let id = socket.id
        memberInfoName[msg['name']] =  {
            group: msg['group'],
            id: id
        }
        memberInfoId[id] =  {
            group: msg['group'],
            name: msg['name']
        }
        socket.join(msg['group'])
        socket.emit('registry', 'success')
    })
    socket.on('msgGroupAllSend', (msg) => {
        let id = socket.id
        let g = memberInfoId[id]['group']
        chat.to(g).emit('msgGroupAllSend', msg);
    })
    socket.on('msgGroupSend', (msg) => {
        let id = socket.id
        let g = memberInfoId[id]['group']
        socket.broadcast.to(g).emit('msgGroupSend' ,msg)
    })
    socket.on('msgWhisperSend', (msg) => {
        let id = memberInfoName[msg['whisper']]['id']
        socket.to(id).emit('msgWhisperSend', msg['message'])
    })
})
