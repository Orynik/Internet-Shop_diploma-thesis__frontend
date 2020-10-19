import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/CRUD/index.vue'

// Подключение главных страниц таблиц базы

import AdminSerials from '../views/CRUD/serials/index.vue'
import AdminSerialsCreate from '../views/CRUD/serials/create.vue'
import AdminSerialsDelete from '../views/CRUD/serials/delete.vue'
import AdminSerialsEdit from '../views/CRUD/serials/edit.vue'

import AdminMotors from '../views/CRUD/motors/index.vue'
import AdminMotorsEdit from '../views/CRUD/motors/edit.vue'
import AdminMotorsDelete from '../views/CRUD/motors/delete.vue'
import AdminMotorsCreate from '../views/CRUD/motors/create.vue'



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
  // CRUD для таблицы Motors

  {
    path: '/admin/motors',
    name: "AdminMotors",
    component: AdminMotors,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/motors/create',
    name: "AdminMotorsCreate",
    component: AdminMotorsCreate,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/motors/edit/:id',
    name: "AdminMotorsEdit",
    component: AdminMotorsEdit,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/motors/delete/:id',
    name: "AdminMotorsDelete",
    component: AdminMotorsDelete,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/serials',
    name: "AdminSerials",
    component: AdminSerials,
    meta:{layout: 'layout-admin'}
  },

  // CRUD для таблицы Serials
  
  {
    path: '/admin/serials',
    name: "AdminSerials",
    component: AdminSerials,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/serials/create',
    name: "AdminSerialsCreate",
    component: AdminSerialsCreate,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/serials/edit/:id',
    name: "AdminSerialsEdit",
    component: AdminSerialsEdit,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/serials/delete/:id',
    name: "AdminSerialsDelete",
    component: AdminSerialsDelete,
    meta:{layout: 'layout-admin'},
    props: true
  },
  // {
  //   path: '/admin/serials',
  //   name: "AdminSerials",
  //   component: AdminSerials,
  //   meta:{layout: 'layout-admin'}
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
