<template>
    <div class="">
        <c1 :message="n"></c1>
        <h1>index 페이지 {{n}}</h1>
        <button @click="increment">index 증가</button>
    </div>
</template>

<script>
import c1 from '../components/c1.vue'

export default {
    components: {c1},
    data () {
        return {
            n: 1
        }
    },
    methods: {
        increment (){
            this.n += 1
        }
    }
}
</script>
