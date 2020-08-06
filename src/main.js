import Vue from 'vue'
import App from './App.vue'
import starUI from '../packages/index'
Vue.use(starUI, {
  backColor: 'linear-gradient(45deg, #355c7d, #6c5b7b,#c06c84)', // 背景色
  textColor: '#333', // 文本默认颜色
  fActiveColor: '#c06c84' // 文本选中颜色
})

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
