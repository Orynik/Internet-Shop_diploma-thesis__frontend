import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/CRUD/index.vue'

// Подключение главных страниц таблиц базы
import AdminMotors from '../views/CRUD/motors/index.vue'
import AdminSerials from '../views/CRUD/serials/index.vue'
import AdminMotorsEdit from '../views/CRUD/motors/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {layout: "layout-home"}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: "Admin",
    component: Admin,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/motors',
    name: "AdminMotors",
    component: AdminMotors,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/motors/:id',
    name: "AdminMotors",
    component: AdminMotorsEdit,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/serials',
    name: "AdminSerials",
    component: AdminSerials,
    meta:{layout: 'layout-admin'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
