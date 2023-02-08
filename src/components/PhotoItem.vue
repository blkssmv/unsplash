<template>
    <img :src="photo.urls.full" alt="">
</template>

<script>

export default{
    props: ['photo']
}
</script>

<style scoped>
img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
}
</style>