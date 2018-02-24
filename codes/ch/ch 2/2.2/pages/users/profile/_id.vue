<template>
  <h1>유저 id:{{userId}} 프로필 </h1>
</template>

<script>
export default {
    validate ({ params }) {
        if(!isNaN(params.id)){
            return true
        }else{
            return false
        }
    },
    data () {
        return {
            userId : this.$route.params.id
        }
    },
}
</script>
