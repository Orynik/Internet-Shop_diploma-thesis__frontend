<template>
  <div class = "mx-3">
    <h3 class = "text-center">Таблица Поставщиков</h3>
    <table border = "1" align = "center">
      <thead>
        <th>
          <td>id</td>
        </th>
        <th>
          <td>Название</td>
        </th>
        <th>
          <td>Расположение</td>
        </th>
        <th>
          <td>Номер</td>
        </th>
        <th>
          <td>Действия</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.id}}</td>
          <td>{{data.Company}}</td>
          <td>{{data.Location}}</td>
          <td>{{data.Tel}}</td>
          <td align="center">
            <router-link :to = "{name: 'AdminManufacturersEdit',params: {id: data.id}}" class = "btn-primary btn">
              Редактировать
            </router-link>
            <router-link :to = "{name: 'AdminManufacturersDelete',params: {id: data.id}}" class = "btn-danger btn">
              Удалить
            </router-link>
          </td>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminManufacturersCreate'}" class = "btn btn-success mt-3">
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
      api.getManufacturers()
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>