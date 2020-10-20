<template>
  <div class = "mx-3">
    <h3 class = "text-center">Таблица Serials</h3>
    <table border = "1" class = "mx-auto">
      <thead>
        <th>
          <td>id</td>
        </th>
        <th>
          <td>Название</td>
        </th>
        <th>
          <td>Функции</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.id}}</td>
          <td>{{data.Serial}}</td>
          <td>
            <router-link :to = "{name: 'AdminSerialsEdit', params: {id: data.id}}"  class = "btn-primary btn">
              Изменить
            </router-link>
            <router-link :to = "{name: 'AdminSerialsDelete', params: {id: data.id}}" class = "btn-danger btn">
              Удалить
            </router-link>
          </td>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminSerialsCreate'}" class = "btn btn-success mt-3">
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
      api.getSerials()
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>