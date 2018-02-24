<template>
    <div class="container">
        <form @submit.prevent="registry">
            <label for="옷 이름">옷 이름</label>
            <input type="text" v-model="name">
            <label for="옷 가격">옷 가격</label>
            <input type="text" v-model="price">
            <label for="옷 카테고리">옷 카테고리</label>
            <select v-model="category">
                <option v-for="cate in categories" v-bind:value="cate" :key="cate">
                    {{cate}}
                </option>
            </select>
            <label for="옷 이미지">옷 이미지</label>
            <input type="file" id="img">
            <button type="submit" >등록하기</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'admin',
    data () {
        return {
            categories: ['상의', '하의'],
            name: '',
            price: '',
            category: ''
        }
    },
    methods : {
        async registry () {
            let formData = new FormData();
            let fileDom = document.querySelector('#img')
            if(this.name && this.price && this.category && fileDom.files[0]){
                formData.append("img", fileDom.files[0]);
                formData.append("name", this.name);
                formData.append("price", this.price);
                formData.append("category", this.category);

                let data = await axios.post('http://localhost:3000/api/v1.0/admin/clothes/registry', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                })
                alert('제품이 정상적으로 등록되었습니다.')
                this.$nuxt.$router.replace({ path: '/admin' })
            }else{
                alert('빈 양식이 있습니다.')
            }

        }
    }
}
</script>
