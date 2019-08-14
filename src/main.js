import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'

import 'element-ui/lib/theme-chalk/index.css'
import Header from './components/common/header.vue'
import Header1 from './components/common/header1.vue'

Vue.component('exam-header', Header)
Vue.component('exam-header1', Header1)

Vue.use(ElementUI)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:9001'
axios.interceptors.request.use(config => {
  var token = window.sessionStorage.getItem('token')
  if (token){
    config.headers.Authorization = window.sessionStorage.getItem('token')
  }
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
