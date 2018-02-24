<template>
    <div>
        <h1>c1 컴포넌트 {{message}}</h1>
        <button @click="increment">c1 증가</button>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Number
        }
    },
    methods: {
        increment (){
            this.message += 1
        }
    }
}
</script>
