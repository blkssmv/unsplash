<template>
    <HeaderComponent />
    <router-view/>
</template>
<script>


import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
}

ul,
ol,
li {
  list-style: none;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 220px;
}
@media (max-width: 1440px) {
  .container{
    padding: 0 110px;
  }
}


@media (max-width: 991px) {
  .container{
    padding: 0 55px;
  }
}

@media (max-width: 768px) {
  .container{
    padding: 0 20px;
  }
}
</style>
