<template>
    <div class="">
        <ul class='users'>
            <li v-for="user in users">id: {{user.id}}, name: {{user.name}}, age: {{user.age}}</li>
        </ul>

        <div class="add">
            <input type="text" name="" v-model:value="id">
            <input type="text" name="" v-model:value="name">
            <input type="text" name="" v-model:value="age">
            <button type="button" @click="userAdd">추가</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    computed: mapGetters({
        users: 'users/userInfos'
    }),
    data () {
        return {
            name: '',
            age: '',
            id: ''
        }
    },
    methods: {
        userAdd () {
            let userInfo = {name: this.name, age: this.age, id: this.id}
            this.add(userInfo)
            this.name = ''
            this.age = ''
            this.id = ''
        },
        ...mapMutations({
            add: 'users/add'
        })
    }
}
</script>
