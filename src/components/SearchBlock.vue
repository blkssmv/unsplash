<template>
    <div class="search-block" :style="{ backgroundImage: `url(${randomPhoto})` }">
        <div class="container">
            <div class="search_input">
                <div class="search_form">
                    <input
                        @keyup.enter="searchAndShowPhotos"
                        v-model="altPhoto" 
                        type="search" 
                        placeholder="Поиск" 
                    />
                </div>
                <div class="search_icon" @click="searchAndShowPhotos">
                    <img src="../assets/search.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    props: {
        randomPhoto: String,
        accessKey: String,
        url: String
    },
    data() {
        return {
            altPhoto: '',
            searchedPhotos: [],
        }
    },
    methods: {
        searchPhotosByName(){
            try{
                const response = axios.get(this.url + `/search/photos?client_id=${this.accessKey}`, {
                    params: {
                        query: this.altPhoto,
                        lang: 'ru' 
                    }
                })
                this.searchedPhotos = response.data.results
            } catch (e){
                console.log(e)
            }
        },

        showSearchedPhotos(){
            this.$emit('showSearchedPhotos', this.searchedPhotos)
        },
        searchAndShowPhotos(){
            this.searchPhotosByName()
            this.showSearchedPhotos()
        },
        
    },
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-block {
    padding: 92px 0;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-bottom: 16px solid #C4C4C4;
    margin-bottom: 114px;
}

.search_input {
    display: flex;
    max-width: 866px;
    width: 100%;
    height: 70px;
    position: relative;
    align-items: center;
}

.search_icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 35px;
}

.search_form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
}

.search_form input {
    padding: 0 95px 0 35px;
    width: 100%;
    max-width: 100%;
    height: 100%;
}
.search_form input:focus::placeholder{
    color: transparent
}
.search_form input::placeholder, 
.search_form input {
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
}

@media (max-width: 768px){
    .search-block {
        padding: 80px 0;
        border-bottom: none;
    }
    .search_form input {
        padding: 0 55px 0 25px;
    }
    .search_icon{
        right: 25px;
    }
}
</style>