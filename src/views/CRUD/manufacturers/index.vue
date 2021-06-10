<template>
  <div class = "mx-3">
    <h3 class = "text-center">Таблица Поставщиков</h3>
    <table border = "1" align = "center">
      <thead>
        <th>
          <td>Название</td>
        </th>
        <th>
          <td>Номер</td>
        </th>
        <th>
          <td>Индекс</td>
        </th>
        <th>
          <td>Страна</td>
        </th>
        <th>
          <td>Город</td>
        </th>
        <th>
          <td>Улица</td>
        </th>
        <th>
          <td>Строение</td>
        </th>
        <th>
          <td>Действия</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.Company}}</td>
          <td>{{data.Tel}}</td>
          <td>{{data.ZipCode}}</td>
          <td>{{data.Country}}</td>
          <td>{{data.City}}</td>
          <td>{{data.Street}}</td>
          <td>{{data.Building}}</td>
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
import api from '@/api/AllRequestApi.js'

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