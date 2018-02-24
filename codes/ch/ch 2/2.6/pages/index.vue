<template>
    <div class="">
        <c1 :touch="t1"></c1>
        <c1 :touch="t2"></c1>
    </div>
</template>

<script>
import c1 from '../components/c1.vue'

export default {
    components: {c1},
    methods: {
        t1 () {
            alert('t1')
        },
        t2 () {
            alert('t2')
        }
    }
}
</script>
