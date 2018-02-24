<template>
    <section class="container">
        <div class="category">
            <a @click="changeCategory('하의')">하의</a>
            <a @click="changeCategory('상의')">상의</a>
        </div>
        <ul>
            <li  v-for="cloth in clothes" :key="cloth['id']">
                <nuxt-link :to='{path: "/cloth/" + cloth["id"]}'>
                    <img :src='"http://localhost:3000/uploads/" + cloth["img"]'>
                    <h3>{{cloth['name']}}</h3>
                    <h3>{{cloth['price']}}</h3>
                </nuxt-link>
            </li>
        </ul>
        <div class="pagination">
            <a href="#" @click='getPage(p)' v-for="p in pagination" :key="p">{{p + 1}}</a>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
function getPagination ({currentPage, totalCount, limit}) {
    let pn = []
    let maxPage = Math.floor(totalCount/limit)
    for(let i = currentPage -3; i < currentPage +3 && i <= maxPage ; i++){
        if(i> -1){
            pn.push(i)
        }
    }
    return pn
}
export default {
    async asyncData () {
        let data = await axios.get('http://localhost:3000/api/v1.0/clothes')
        return {
            clothes: data.data.cloth,
            totalCount: data.data.totalCount,
            limit : data.data.limit,
            currentPage: data.data.currentPage,
            pagination: getPagination({
                currentPage: data.data.currentPage ,
                totalCount: data.data.totalCount,
                limit : data.data.limit
            }),
            category : ''
        }
    },
    methods : {
        changeCategory (category) {
            this.category = category
            this.getPage(0)
        },
        async getPage (page) {
            let url = `http://localhost:3000/api/v1.0/clothes?page=${page}&category=${this.category}`
            let data = await axios.get(url)
            this.clothes = data.data.cloth
            this.totalCount = data.data.totalCount
            this.limit = data.data.limit
            this.currentPage = data.data.currentPage
            this.pagination = getPagination({
                currentPage: data.data.currentPage,
                totalCount: data.data.totalCount,
                limit : data.data.limit
            })
        }
    }
}
</script>
