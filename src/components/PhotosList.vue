<template>
    <ul class="photos">
        <li class="photo" v-for="photo in photos" :key="photo.id" @click="$router.push(`/image/${photo.id}`)">
            <PhotoItem :photo="photo"/>
        </li>
    </ul>
</template>

<script>


import PhotoItem from './PhotoItem.vue';

export default {
    props: {
        photos: Array
    },
    components: { PhotoItem }
}

</script>


<style scoped>
.photos{
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}
.photo{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 473px;
    height: 440px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .2s ease;
}
.photo:hover{
    box-shadow: 0 0 25px rgba(33,33,33,.4); 
}

@media (max-width: 1440px){
    .photos{
        grid-template-columns: 1fr 1fr;
    }
    .photo{
        max-width: 100%;
        height: 380px;
    }
}
@media (max-width: 768px){
    .photos{
        grid-template-columns: 1fr;
    }
    .photo{
        max-width: 100%;
        height: 320px;
    }
}

</style>