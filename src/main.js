import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import Header from './components/common/header.vue'
import Header1 from './components/common/header1.vue'
import './assets/css/reset.css'

Vue.component('exam-header', Header)
Vue.component('exam-header1', Header1)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
