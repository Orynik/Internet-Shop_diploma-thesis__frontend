import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Необходимости для кастомизации
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'
import '@/assets/css/font-awesome.min.css'
import 'popper.js/dist/popper'
import 'jquery/dist/jquery'

// Подключение laypouts для разных страниц
import LayoutHome from '@/layouts/default_wos'
import LayoutAdmin from '@/layouts/admin'

// Регистрация разных шаблонов

Vue.component('layout-admin', LayoutAdmin)
/*
  Вынесено две версии шаблонов домашней страницы из-за ошибки,
  связанной с невозможностью задать условное отображение через
  v-if/v-show
*/
Vue.component('layout-home', LayoutHome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
