<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
          <router-link
            tag="li"
            class="item boder-bottom"
            v-for="item of list"
            :key="item.id"
            :to="'/detail/' + item.id "
          >
            <div class="item-img-wrapper">
              <img class="item-img" :src="item.imgUrl" alt="">
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">查看详情</button>
            </div>
          </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首站，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首站，浪漫的海洋主题乐园'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
  //       title: '大连圣亚海洋世界',
  //       desc: '浪漫大连首站，浪漫的海洋主题乐园'
  //     }]
  //   }
  // }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0 //原省略号设置不起作用
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
