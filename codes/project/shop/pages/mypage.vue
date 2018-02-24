<template>
    <div class="container">
        <button type="button" @click="signout">로그아웃</button>
        <table>
            <tr  v-for="purchase in purchases" :key="purchase['id']">
                <td>{{purchase['user.uid']}}</td>
                <td>{{purchase['clothe.name']}}</td>
                <td>{{purchase['clothe.price']}}원</td>
                <td>{{purchase['count']}}개</td>
            </tr>
        </table>
        <div class="pagination">
            <a href="#" @click='getPage(p)' v-for="p in pagination" :key="p">{{p + 1}}</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'
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
        let data = await axios.get('http://localhost:3000/api/v1.0/purchase')
        return {
            purchases: data.data.purchase,
            totalCount: data.data.totalCount,
            limit : data.data.limit,
            currentPage: data.data.currentPage,
            pagination: getPagination({
                currentPage: data.data.currentPage ,
                totalCount: data.data.totalCount,
                limit : data.data.limit
            })
        }
    },
    methods : {
        async getPage (page) {
            let url = `http://localhost:3000/api/v1.0/purchase?page=${page}`
            let data = await axios.get(url)
            this.purchases = data.data.purchase
            this.totalCount = data.data.totalCount
            this.limit = data.data.limit
            this.currentPage = data.data.currentPage
            this.pagination = getPagination({
                currentPage: data.data.currentPage,
                totalCount: data.data.totalCount,
                limit : data.data.limit
            })
        },
        async signout () {
            let url = 'http://localhost:3000/api/v1.0/users/signout'
            let data = await axios.put(url)
            this.logout()  // 상태변경
            this.$nuxt.$router.replace({ path: '/' })  // 메인페이지 이동

        },
        ...mapMutations({
            logout: 'users/logout'
        })
    }
}
</script>
