<template>
  <div class = "mx-3">
    <h3 class = "text-center">Таблица Motors</h3>
    <table border = "1" align = "center">
      <thead>
        <th>
          <td>Название</td>
        </th>
        <th>
          <td>Производитель</td>
        </th>
        <th>
          <td>Серия</td>
        </th>
        <th>
          <td>Цена</td>
        </th>
        <th>
          <td>Изображение</td>
        </th>
        <th>
          <td>Действия</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.Name}}</td>
          <td>{{data.Manufacturer}}</td>
          <td>{{data.Serial}}</td>
          <td>{{data.Price}}</td>
          <td>{{data.Image_name}}</td>
          <td align="center">
            <router-link :to = "{name: 'AdminProductsEdit',params: {id: data.id}}" class = "btn-primary btn">
              Редактировать
            </router-link>
            <router-link :to = "{name: 'AdminProductsDelete',params: {id: data.id}}" class = "btn-danger btn">
              Удалить
            </router-link>
          </td>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminProductsCreate'}" class = "btn btn-success mt-3">
      Создать
    </router-link>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data(){
    return {
      raw: {},
    }
  },
  mounted(){
      api.getProducts()
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>