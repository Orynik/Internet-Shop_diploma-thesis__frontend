import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/font-awesome.min.css'
import 'popper.js/dist/popper'
import 'jquery/dist/jquery'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
