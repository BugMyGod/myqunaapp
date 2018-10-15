import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
// 移动端1px边框解决方案
import './assets/styles/border.css'
// 解决300毫秒点击延迟
import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
