<template>
    <div class="container">
        <form @submit.prevent="signup">
            <label for="아이디">아이디</label>
            <input type="text" v-model="uid">
            <label for="패스워드">패스워드</label>
            <input type="password" v-model="password">
            <label for="초기자금">초기자금</label>
            <input type="text" v-model="price">
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            uid: '',
            password: '',
            price: 0
        }
    },
    methods : {
        async signup () {
            if(this.uid && this.password && !isNaN(this.price)){
                let url ='http://localhost:3000/api/v1.0/users/signup'
                let data = await axios.post(url, data={
                    uid: this.uid,
                    password: this.password,
                    price: this.price
                })
                console.log(data)
                if(data.status == 200) {
                    alert('해당 아이디는 이미 존재합니다.')
                }else if(data.status == 201) {
                    this.$nuxt.$router.replace({ path: '/signin' })
                }
            }else{
                alert('양식이 비었거나 초기자금이 문자가 포함되어 있습니다.')
            }
        }
    }
}
</script>
