const express = require('express')
let app = express()

const {Nuxt, Builder} = require('nuxt');
let config = require('../nuxt.config.js');
const nuxt = new Nuxt(config);

const http = require('http')
let server = http.createServer(app)

let socket = require('socket.io')
let io = socket(server)

app.use(nuxt.render);

const builder = new Builder(nuxt);
builder.build()

server.listen(3000, () => {
    console.log('server on 3000 Port')
})

let getNowDate = (d) => (`${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시 ${d.getMinutes()}분 ${d.getSeconds()}초`)

let memberInfoName= {} // {name: id, name: id}
let memberInfoId= {} // {id: name, id: name}
let groups = [] // 그룹 이름
let groupJoinMember = {} // {id: groupName}

let chat = io.of('/chat').on('connection', (socket) => {
    socket.on('enter', (name) => {
        let id = socket.id
        if(memberInfoName.hasOwnProperty(name)){
            socket.emit('enter', false)
        }else{
            memberInfoName[name] = id
            memberInfoId[id] = name
            socket.emit('enter', true)
        }
    })

    socket.on('allSend', (msg) => {
        let id = socket.id
        let message = `[전체채팅] ${memberInfoId[id]} - ${msg} (${getNowDate(new Date())})`
        socket.emit('allSend', message)
        socket.broadcast.emit('allSend', message)
    })

    socket.on('whisperSend', (info) => {
        let id = socket.id
        let recieveId = memberInfoName[info.whisperUser]
        let message = `[귓속말] ${memberInfoId[id]}가 ${info['whisperUser']}에게 - ${info['message']} (${getNowDate(new Date())})`
        chat.to(recieveId).emit('whisperSend', message)
        chat.to(id).emit('whisperSend', message)
    })

    socket.on('disconnect', () => {
        let id = socket.id
        let name = memberInfoId[id]
        delete memberInfoName[name]
        delete memberInfoId[id]
    })

    socket.on('teamCreate', (teamName) => {
        let id = socket.id
        socket.leave(groupJoinMember[id], () =>{
            socket.join(teamName, () => {
                groupJoinMember[id] = teamName
                let message = `[팀채팅] **${memberInfoId[id]}가 참가 했습니다.** (${getNowDate(new Date())})`
                chat.to(groupJoinMember[id]).emit('teamSend', message)
            })
        })
    })

    socket.on('teamSend', (msg) => {
        let id = socket.id
        let message = `[팀채팅] ${memberInfoId[id]} - ${msg} (${getNowDate(new Date())})`
        chat.to(groupJoinMember[id]).emit('teamSend', message)
    })
})
