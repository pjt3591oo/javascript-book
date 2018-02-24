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
    ])
}
</script>
