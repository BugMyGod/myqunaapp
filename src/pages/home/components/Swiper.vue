<template>
    <div class="wraper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wraper >>> .swiper-pagination-bullet-active
    background: white !important
  .wraper
    width:100%
    height:0
    overflow:hidden
    padding-bottom:31.25%
    .swiper-img
      width:100%
</style>
