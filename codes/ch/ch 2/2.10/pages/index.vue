<template>
    <div class="">
        <button @click="$store.commit('increment', 2)">{{ count }}</button>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: mapState([
        'count'
    ]),
    fetch ({store}) {
        console.log('test')
        store.commit('init', 2)
    }
}
</script>
