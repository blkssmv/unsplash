<template>
    <div class="info">
        <div class="container">
            <div class="info__header">
                <div class="info__header_name">
                    <div class="avatar">
                        <img :src="photo.user.profile_image.small"
                            alt="profile">
                    </div>
                    <div class="user">
                        <div class="name">
                            {{ photo.user.name }}
                        </div>
                        <div class="instagram">
                            @{{ photo.user.instagram_username }}
                        </div>
                    </div>
                </div>
                <div class="info__header_actions">
                    <div class="fav" @click="likePhoto">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.652 0.118408C15.9926 0.118408 13.7961 2.58857 12.9078 3.75439C12.0195 2.58857 9.82303 0.118408 7.16359 0.118408C3.72082 0.118408 0.919922 3.28368 0.919922 7.17379C0.919922 9.29616 1.76235 11.2741 3.23691 12.6278C3.25835 12.6648 3.28472 12.699 3.31544 12.7297L12.5551 21.9503C12.6527 22.0474 12.78 22.0962 12.9078 22.0962C13.0356 22.0962 13.1634 22.0474 13.261 21.9499L22.808 12.4063L22.9065 12.3107C22.9846 12.237 23.0616 12.1624 23.1479 12.0668C23.184 12.0312 23.2138 11.9912 23.2367 11.9478C24.3074 10.6366 24.8957 8.94542 24.8957 7.17379C24.8957 3.28368 22.0948 0.118408 18.652 0.118408ZM22.4055 11.3858C22.3919 11.402 22.3792 11.419 22.368 11.4366C22.3211 11.4902 22.2699 11.5375 22.2192 11.5858L12.9073 20.8909L4.13544 12.1365C4.10715 12.0809 4.06763 12.0302 4.01935 11.9878C2.68425 10.8219 1.9189 9.06736 1.9189 7.17379C1.9189 3.83437 4.27152 1.11743 7.16359 1.11743C10.023 1.11743 12.4634 4.84706 12.4878 4.88462C12.6722 5.16947 13.1434 5.16947 13.3278 4.88462C13.3522 4.84706 15.7926 1.11743 18.652 1.11743C21.5441 1.11743 23.8967 3.83442 23.8967 7.17379C23.8967 8.74739 23.3669 10.2434 22.4055 11.3858Z"
                                fill="black" />
                        </svg>
                    </div>
                    <div class="download" @click="downloadPhoto">
                        <div class="download__icon">
                            <svg width="26" height="23" viewBox="0 0 26 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.381 10.7776C25.0395 10.7787 24.7629 11.055 24.7619 11.3966V19.209C24.759 20.2333 23.9291 21.0631 22.9048 21.0662H3.09524C2.07091 21.0631 1.241 20.2333 1.2381 19.209V11.3966C1.2381 11.0548 0.961071 10.7776 0.619048 10.7776C0.277024 10.7776 0 11.0548 0 11.3966V19.209C0.00077381 20.9182 1.38609 22.3035 3.09524 22.3043H22.9048C24.6139 22.3035 25.9992 20.9182 26 19.209V11.3966C25.999 11.055 25.7224 10.7787 25.381 10.7776Z"
                                    fill="black" />
                                <path
                                    d="M8.46874 14.3124L12.4059 17.6862C12.4094 17.6862 12.4121 17.6891 12.4121 17.6924L12.4306 17.711C12.4368 17.7171 12.4492 17.7233 12.4554 17.7295C12.4614 17.7373 12.4703 17.7417 12.4802 17.7419C12.4864 17.7481 12.4987 17.7543 12.5049 17.7605C12.5111 17.7667 12.5235 17.7667 12.5297 17.7729C12.5359 17.779 12.5483 17.779 12.5606 17.7852C12.5668 17.7914 12.5792 17.7914 12.5854 17.7976C12.5978 17.8038 12.604 17.8038 12.6164 17.81C12.6225 17.81 12.6349 17.8162 12.6411 17.8162C12.6535 17.8162 12.6597 17.8224 12.6721 17.8224C12.6783 17.8224 12.6906 17.8286 12.6968 17.8286C12.7092 17.8286 12.7216 17.8348 12.734 17.8348H12.8949C12.9073 17.8348 12.9197 17.8286 12.9321 17.8286C12.9383 17.8286 12.9506 17.8224 12.9568 17.8224C12.9692 17.8224 12.9754 17.8162 12.9878 17.8162C12.994 17.8162 13.0064 17.81 13.0125 17.81C13.0249 17.8038 13.0311 17.8038 13.0435 17.7976C13.0497 17.7914 13.0621 17.7914 13.0683 17.7852C13.0806 17.779 13.0868 17.779 13.0992 17.7729C13.1054 17.7667 13.1178 17.7667 13.124 17.7605C13.1302 17.7543 13.1425 17.7481 13.1487 17.7419C13.1549 17.7357 13.1611 17.7357 13.1735 17.7295C13.1797 17.7233 13.1921 17.7171 13.1983 17.711L13.2168 17.6924C13.2203 17.6924 13.223 17.6895 13.223 17.6862L17.1602 14.3124C17.4202 14.0901 17.4505 13.6993 17.2283 13.4395C17.0062 13.1797 16.6154 13.1492 16.3554 13.3714L13.4335 15.8724V0.619048C13.4335 0.277024 13.1565 0 12.8145 0C12.4724 0 12.1954 0.277024 12.1954 0.619048V15.8724L9.2735 13.3714C9.0135 13.1492 8.62272 13.1797 8.40064 13.4395C8.17836 13.6993 8.20874 14.0901 8.46874 14.3124Z"
                                    fill="black" />
                            </svg>
                        </div>
                        <div class="download__text">
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div class="info__main" :style="{'transform': maximized ? 'scale(1.2)' : 'scale(1)'}">
                <img :src="photo.urls.full" alt="">
                <div class="maximize" @click="maximizeAndMinimizePhoto">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59835 3.59835C4.30161 2.89509 5.25544 2.5 6.25 2.5H10C10.6904 2.5 11.25 3.05964 11.25 3.75C11.25 4.44036 10.6904 5 10 5H6.25C5.91848 5 5.60054 5.1317 5.36612 5.36612C5.1317 5.60054 5 5.91848 5 6.25V10C5 10.6904 4.44036 11.25 3.75 11.25C3.05964 11.25 2.5 10.6904 2.5 10V6.25C2.5 5.25544 2.89509 4.30161 3.59835 3.59835ZM18.75 3.75C18.75 3.05964 19.3096 2.5 20 2.5H23.75C24.7446 2.5 25.6984 2.89509 26.4017 3.59835C27.1049 4.30161 27.5 5.25544 27.5 6.25V10C27.5 10.6904 26.9404 11.25 26.25 11.25C25.5596 11.25 25 10.6904 25 10V6.25C25 5.91848 24.8683 5.60054 24.6339 5.36612C24.3995 5.1317 24.0815 5 23.75 5H20C19.3096 5 18.75 4.44036 18.75 3.75ZM3.75 18.75C4.44036 18.75 5 19.3096 5 20V23.75C5 24.0815 5.1317 24.3995 5.36612 24.6339C5.60054 24.8683 5.91848 25 6.25 25H10C10.6904 25 11.25 25.5596 11.25 26.25C11.25 26.9404 10.6904 27.5 10 27.5H6.25C5.25544 27.5 4.30161 27.1049 3.59835 26.4017C2.89509 25.6984 2.5 24.7446 2.5 23.75V20C2.5 19.3096 3.05964 18.75 3.75 18.75ZM26.25 18.75C26.9404 18.75 27.5 19.3096 27.5 20V23.75C27.5 24.7446 27.1049 25.6984 26.4017 26.4017C25.6984 27.1049 24.7446 27.5 23.75 27.5H20C19.3096 27.5 18.75 26.9404 18.75 26.25C18.75 25.5596 19.3096 25 20 25H23.75C24.0815 25 24.3995 24.8683 24.6339 24.6339C24.8683 24.3995 25 24.0815 25 23.75V20C25 19.3096 25.5596 18.75 26.25 18.75Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import axios from 'axios';

export default {
    data() {
        return {
            accessKey: "nKnhUxrHvyLZcbYJ11kQm6LPj8DmDaMuKODtrDdWIX8",
            url: 'https://api.unsplash.com',
            id: this.$route.params.id,
            photo: {},
            maximized: false,
        }
    },
    methods: {
        async getPhoto(){
            await axios.get(this.url + `/photos/${this.id}` + `?client_id=${this.accessKey}`).then(res => {
                this.photo = res.data
            })
        },

        maximizeAndMinimizePhoto(){
            this.maximized = !this.maximized
        },

        async likePhoto(){
            await axios.post(this.url + `/photos/${this.id}/like` + `?client_id=${this.accessKey}`).then(res => {
                console.log(res)
            })
        },

        async downloadPhoto(){

            


            await axios.get(this.url + `/photos/${this.id}/download` + `?client_id=${this.accessKey}`).then(res => {
                console.log(res.data)
            })
            
        }
    },  
    beforeMount(){
       this.getPhoto()   
    }
}
</script>
<style scoped>
.info{
    padding: 46px 0 0 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    height: 774px;
}
.info__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;
    margin-bottom: 40px;
}
.info__header_name{
    display: flex;
    align-items: center;
    font-size: 30px;
    line-height: 35px;
    color: #F2F2F2;
}
.instagram{
    font-size: 18px;
    line-height: 21px;
}
.info__header_actions {
    display: flex;
    align-items: center;
}

.avatar {
    margin-right: 10px;
    display: flex;
    width: 55px;
    height: 55px;
    align-items: center;
    justify-content: center;
}

.avatar img {
    width: 100%;
    height: 100%;
    border: 1px solid #FFFFFF;
    border-radius: 8px;
}

.fav {
    display: flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
}
.fav:hover{
    transform: scale(1.03);
}

.download {
    margin-left: 20px;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 23px;
    background: #FFF200;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
}
.download:hover{
    transform: scale(1.03);
}
.download__icon{
    margin-right: 16px;
}

.info__main{    
    position: relative;
}
.info__main img{
    max-width: 1482px;
    width: 100%;
    height: 744px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    object-fit: cover;
}
.maximize{
    cursor: pointer;
    position: absolute;
    bottom: 33px;
    right: 33px;
    transition: all 0.4s ease;
}
.maximize:hover{
    transform: scale(1.2);
}

@media (max-width: 1440px){
    .info{
        height: 520px;
    }
    .info__main img{
        height: 490px;
    }
}
@media (max-width: 991px){
    .info{
        height: 450px;
    }
    .info__main img{
        height: 420px;
    }
}
@media (max-width: 768px){
    .info{
        height: 380px;
    }
    .info__main img{
        height: 350px;
    }
    .info{
        padding: 35px 0 0 0;
    }
    .download{
        padding: 0;
    }
    .download__text{
        display: none;
    }
    .download__icon{
        display: flex;
        justify-content: center;
        margin: 0;
        width: 50px;
    }
}

</style>