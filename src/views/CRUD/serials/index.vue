<template>
  <div>
    <table border = "1">
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
            <router-link :to = "{name: 'AdminSerialsDelete', params: {id: data.id}}">
              Удалить
            </router-link>
            <router-link :to = "{name: 'AdminSerialsEdit', params: {id: data.id}}">
              Изменить
            </router-link>
          </td>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminSerialsCreate'}">
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