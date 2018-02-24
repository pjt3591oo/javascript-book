<template>
    <div class="">
        <c1 :text="message1"></c1>
        <c1 :text="message2"></c1>
    </div>
</template>

<script>
import c1 from '../components/c1.vue'

export default {
    components: {c1},
    data () {
        return {
            message1: 'hello world1',
            message2: 'hello world2',
        }
    }
}
</script>
