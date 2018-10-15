<template>
  <div>
    <div class="home">home</div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 局部组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>
  .home{
    height: 50px
  }
</style>
