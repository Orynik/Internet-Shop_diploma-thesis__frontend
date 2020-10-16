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
import LayoutOther from '@/layouts/default_wos'
import LayoutHome from '@/layouts/default_ws'
import LayoutAdmin from '@/layouts/admin'
import Slider from '../src/components/Slider'

// Регистрация разных шаблонов

Vue.component('layout-admin', LayoutAdmin)
/*
  Вынесено две версии шаблонов домашней страницы из-за ошибки,
  связанной с невозможностью задать условное отображение через
  v-if/v-show
*/
Vue.component('default-layout', LayoutOther)
Vue.component('layout-home', LayoutHome)

// Регистрация для работы компонента в Layouts/..
Vue.component('Slider', Slider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
