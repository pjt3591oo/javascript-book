<template>
    <div>
        <h1>c1 컴포넌트</h1>
        <button @click="touch">클릭</button>
    </div>
</template>

<script>
export default {
    props: ['touch']
}
</script>
