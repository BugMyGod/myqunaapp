<template>
  <div>
    <div class="home">home</div>
    <home-header></home-header>
    <!--<router-link to="/city" class="home">跳转到city</router-link>-->
  </div>
</template>

<script>
// 局部组件
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
  .home{
    height: 50px
  }
</style>
