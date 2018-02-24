<template lang="html">
  <div class="">
      <div class="">
          이름: <input type="text" name="" v-model:value="name">
          그룹: <input type="text" name="" v-model:value="group">
          <button type="button" name="button" @click="registry">등록</button>
      </div>
      <div class="">
          메시지: <input type="text" name="" v-model="sendMessage" placeholer='전송메시지'>
          그룹: <input type="text" name="" v-model="sendGroup" placeholer='그룹'>
          유저: <input type="text" name="" v-model="whisper" placeholer='유저'>
          <button type="button" name="button" @click="msgAllSend">전체 전송</button>
          <button type="button" name="button" @click="msgGroupAllSend">그룹 전송</button>
          <button type="button" name="button" @click="msgGroupSend">그룹에서 나 뺴고 전송</button>
          <button type="button" name="button" @click="msgWhisperSend">귓속말</button>
          <h1>{{msg}}</h1>
      </div>
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
    data () {
        return {
            sendMessage: '',
            msg: '',
            name: '',
            group: '',
            sendGroup: '',
            whisper: '',
        }
    },
    methods: {
        msgAllSend () {
            socket.emit('everyBodySend', this.sendMessage)
            this.sendMessage = ''
        },
        msgGroupAllSend () {
            socket.emit('msgGroupAllSend', this.sendMessage)
            this.sendMessage = ''
        },
        msgGroupSend() {
            socket.emit('msgGroupSend', this.sendMessage)
            this.sendMessage = ''
        },
        msgWhisperSend() {
            socket.emit('msgWhisperSend', {
                message: this.sendMessage,
                whisper: this.whisper
            })
        },
        registry () {
            socket.emit('registry', {
                name: this.name,
                group: this.sendGroup
            })
        }
    },
    beforeMount () {
        socket.on('everyBodySend', (msg) => {
            this.msg = msg
        })
        socket.on('registry', (msg) => {
            alert(msg)
        })
        socket.on('msgGroupAllSend', (msg) => {
            this.msg = msg
        })
        socket.on('msgGroupSend', (msg) => {
            this.msg = msg
        })
        socket.on('msgWhisperSend', (msg) => {
            this.msg = msg
        })
    }
}
</script>
