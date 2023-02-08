<template>
    <SearchBlock @showSearchedPhotos="showSearchedPhotos" :url="url" :accessKey="accessKey"
        :randomPhoto="randomPhoto" />
    <div class="container">
        <PhotosList :photos="randomPhotos" />
    </div>
</template>


<script>
import SearchBlock from '@/components/SearchBlock.vue';
import PhotosList from '@/components/PhotosList.vue';
import axios from 'axios';
export default {
    components: { SearchBlock, PhotosList },
    data() {
        return {
            accessKey: "nKnhUxrHvyLZcbYJ11kQm6LPj8DmDaMuKODtrDdWIX8",
            url: 'https://api.unsplash.com',
            randomPhotos: [],
            randomPhoto: ''
        }
    },
    methods: {
        async fetchRandomPhotos() {
            try {
                const response = await axios.get(this.url + `/photos/random?client_id=${this.accessKey}`, {
                    params: {
                        count: 8
                    }
                })
                this.randomPhotos = response.data
            } catch (e) {
                console.log(e)
            }
        },
        async getRandomPhoto() {
            try {
                const response = await axios.get(this.url + `/photos/random?client_id=${this.accessKey}`)
                this.randomPhoto = response.data.urls.full
            } catch (e) {
                console.log(e)
            }
        },
        showSearchedPhotos(searchedPhotos) {
            this.randomPhotos = searchedPhotos
        }
    },
    mounted() {
        this.fetchRandomPhotos()
        this.getRandomPhoto()
    },
}
</script>
<style scoped>

</style>