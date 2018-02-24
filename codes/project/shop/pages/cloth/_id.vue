<template>
    <div class="detail">
        <img :src='"http://localhost:3000/uploads/" + img'>
        <h3>{{name}}</h3>
        <h3>{{price}}</h3>

        <button type="button" @click="buy">구매하기</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    validate ({ params }) {
        return true
    },
    data () {
        return {
            name: '',
            price: '',
            img: '',
            clothId: this.$route.params.id
        }
    },
    async created () {
        let url = `http://localhost:3000/api/v1.0/clothes/detail?clothId=${this.clothId}`
        let data = await axios.get(url)
        this.name= data.data.name
        this.price= data.data.price
        this.img= data.data.img
    },
    methods: {
        async buy () {
            let url = 'http://localhost:3000/api/v1.0/purchase'
            let data = await axios.post(url, {
                clothId: this.clothId,
                price: this.price
            })
            if(data.status == 201) {
                alert('해당 제품 구매를 완료했습니다.')
            }else if (data.status == 204) {
                alert('돈이 부족합니다.')
            }else if (data.status == 200){
                alert('구매하시려면 로그인을 해야합니다')
            }
        }
    }
}
</script>
