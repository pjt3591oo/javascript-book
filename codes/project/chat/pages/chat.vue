<template>
    <div class="chat">
        <h1>채팅방에 오신것을 환영합니다.</h1>
        <div class="team">
            <input type="text" name="" v-model="teamName">
            <button type="button" @click="teamCreate">팀 생성/참가</button>
        </div>

        <div class="send">
            <input type="text" name="" v-model="message">
            <input type="text" name="" v-model="whisperUser">
            <button type="button" @click="allSend">전체채팅</button>
            <button type="button" @click="whisperSend">귓속말</button>
            <button type="button" @click="teamSend">팀채팅</button>
        </div>

        <div class="msg">
            <ul id="msg">
                <li v-for="msg in messages" :key='msg'>
                    {{msg}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
    data () {
        return {
            message: '',
            whisperUser: '',
            messages: [],
            teamName: ''
        }
    },
    methods: {
        allSend () {
            socket.emit('allSend', this.message)
        },
        whisperSend () {
            socket.emit('whisperSend', {
                whisperUser: this.whisperUser,
                message: this.message
            })
        },
        teamCreate () {
            socket.emit('teamCreate', this.teamName)
        },
        teamSend () {
            socket.emit('teamSend', this.message)
        }
    },
    beforeMount () {
        socket.on('allSend', (result) => {
            this.messages.push(result)
        })
        socket.on('whisperSend', (result) => {
            console.log(result)
            this.messages.push(result)
        })

        socket.on('teamSend', (result) => {
            console.log(result)
            this.messages.push(result)
        })
    }
}
</script>
