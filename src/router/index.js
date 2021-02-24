import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/CRUD/index.vue'
import Catalog from "../components/Product_Catalog.vue"
import CatalogItem from "../components/Product_Item.vue"
import Backet from "../components/Backet.vue"

// Подключение главных страниц таблиц базы

import AdminSerials from '../views/CRUD/serials/index.vue'
import AdminSerialsCreate from '../views/CRUD/serials/create.vue'
import AdminSerialsDelete from '../views/CRUD/serials/delete.vue'
import AdminSerialsEdit from '../views/CRUD/serials/edit.vue'

import AdminMotors from '../views/CRUD/motors/index.vue'
import AdminMotorsEdit from '../views/CRUD/motors/edit.vue'
import AdminMotorsDelete from '../views/CRUD/motors/delete.vue'
import AdminMotorsCreate from '../views/CRUD/motors/create.vue'

import AdminManufacturers from '../views/CRUD/manufacturers/index.vue'
import AdminManufacturersEdit from '../views/CRUD/manufacturers/edit.vue'
import AdminManufacturersDelete from '../views/CRUD/manufacturers/delete.vue'
import AdminManufacturersCreate from '../views/CRUD/manufacturers/create.vue'

import AdminProducts from '../views/CRUD/products/index.vue'
import AdminProductsEdit from '../views/CRUD/products/edit.vue'
import AdminProductsDelete from '../views/CRUD/products/delete.vue'
import AdminProductsCreate from '../views/CRUD/products/create.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {layout: "layout-home"}
  },
  {
    path: "/catalog",
    name: 'Catalog',
    component: Catalog
  },
  {
    path: "/backet",
    name: 'Backet',
    component: Backet
  },
  {
    path: "/catalog/:id",
    name: 'Product',
    component: CatalogItem,
    props: true
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

  // CRUD для таблицы Manufacturers

  {
    path: '/admin/manufacturers',
    name: "AdminManufacturers",
    component: AdminManufacturers,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/manufacturers/create',
    name: "AdminManufacturersCreate",
    component: AdminManufacturersCreate,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/Manufacturers/edit/:id',
    name: "AdminManufacturersEdit",
    component: AdminManufacturersEdit,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/serials/delete/:id',
    name: "AdminManufacturersDelete",
    component: AdminManufacturersDelete,
    meta:{layout: 'layout-admin'},
    props: true
  },


   // CRUD для таблицы Products

   {
    path: '/admin/products',
    name: "AdminProducts",
    component: AdminProducts,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/products/create',
    name: "AdminProductsCreate",
    component: AdminProductsCreate,
    meta:{layout: 'layout-admin'}
  },
  {
    path: '/admin/products/edit/:id',
    name: "AdminProductsEdit",
    component: AdminProductsEdit,
    meta:{layout: 'layout-admin'},
    props: true
  },
  {
    path: '/admin/products/delete/:id',
    name: "AdminProductsDelete",
    component: AdminProductsDelete,
    meta:{layout: 'layout-admin'},
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
