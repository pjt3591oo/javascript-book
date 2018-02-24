<template>
  <section class="container">
    <input type="text" v-model="username">
    <button type="button" v-on:click="enter" >입장</button>
  </section>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
    data () {
        return {
            username: ''
        }
    },
    methods: {
        enter (event) {
            if(this.username){
                socket.emit('enter', this.username)
            }else{
                alert('유저 이름이 비었습니다.')
            }
        }
    },
    beforeMount () {
        socket.on('enter', (result) => {
            if(result){
                this.$nuxt.$router.replace({ path: '/chat' })
            }else{
                alert('해당 유저이름은 존재합니다. 다른이름으로 참가해 주세요')
            }
        })
    }
}
</script>
