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
    // data(){
    //     return{
    //         photos: [
    //             {id: 1, urls: {full: 'https://tengrinews.kz/userdata/news/2023/news_489294/resize/photo_419700.jpeg'}},
    //             {id: 2, urls: {full: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwA_EkKzqjd86mW_D5pOdnGjHR6jetYw7xTw&usqp=CAU'}}
    //         ]
    //     }
    // },
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
    max-height: 440px;
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
        max-height: 100%;
    }
}
@media (max-width: 768px){
    .photos{
        grid-template-columns: 1fr;
    }
    .photo{
        max-width: 100%;
        max-height: 100%;
    }
}

</style>