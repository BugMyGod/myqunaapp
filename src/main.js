import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
// 移动端1px边框解决方案
import 'styles/border.css'
import 'styles/iconfont.css'
// 解决300毫秒点击延迟
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
