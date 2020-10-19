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
          <td>Серия</td>
        </th>
        <th>
          <td>Минимальная мощность</td>
        </th>
        <th>
          <td>Максимальная мощность</td>
        </th>
        <th>
          <td>Наличие полной комплектации</td>
        </th>
        <th>
          <td>Наличие энергосберегающего режима</td>
        </th>
        <th>
          <td>Действия</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.id}}</td>
          <td>{{data.Name}}</td>
          <td>{{data.Serial}}</td>
          <td>{{data.Min_Power}}</td>
          <td>{{data.Max_Power}}</td>
          <td>{{data.Is_Full_Solution == 1 ? "Да" : "Нет"}}</td>
          <td>{{data.Is_Energy_Saving  == 1 ? "Да" : "Нет"}}</td>
          <router-link :to = "{name: 'AdminMotorsEdit',params: {id: data.id}}">
            Редактировать
          </router-link>
          <router-link :to = "{name: 'AdminMotorsDelete',params: {id: data.id}}">
            Удалить
          </router-link>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminMotorsCreate'}">
      Создать
    </router-link>
  </div>
</template>

<script>
// import axios from 'axios'
import api from '@/api/index.js'

export default {
  data(){
    return {
      raw: {},
    }
  },
  mounted(){
      api.getMotors()
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>