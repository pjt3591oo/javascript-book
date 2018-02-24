<template>
    <div class="container">
        <form @submit.prevent="signup">
            <label for="아이디">아이디</label>
            <input type="text" v-model="uid">
            <label for="패스워드">패스워드</label>
            <input type="password" v-model="password">
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
export default {
    data () {
        return {
            uid: '',
            password: ''
        }
    },
    methods : {
        async signup () {
            let url ='http://localhost:3000/api/v1.0/users/signin'
            let data = await axios.post(url, data={
                uid: this.uid,
                password: this.password
            })
            if(data.status == 200) {
                this.login()
                this.$nuxt.$router.replace({ path: '/' })
            }else if(data.status == 204) {
                alert('잘못된 정보입니다.')
            }
        },
        ...mapMutations({
            login: 'users/login'
        })
    }
}
</script>
