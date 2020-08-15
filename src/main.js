import Vue from 'vue'
import App from './App.vue'
import router from './route'
import starUI from '../packages/index'
import pageSlot from './components/page-slot.vue'
import propsTable from './components/props-table.vue'
import eventTable from './components/event-table.vue'
import slotTable from './components/slot-table.vue'
import './styles/index.css'
Vue.use(starUI, {
  // backColor: 'linear-gradient(45deg, #355c7d, #6c5b7b,#c06c84)', // 背景色
  // textColor: '#333', // 文本默认颜色
  // fActiveColor: '#c06c84' // 文本选中颜色
})
Vue.component('pageSlot', pageSlot)
Vue.component('propsTable', propsTable)
Vue.component('eventTable', eventTable)
Vue.component('slotTable', slotTable)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
