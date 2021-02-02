<template>
  <div class = "mx-3">
    <h3 class = "text-center">Таблица Motors</h3>
    <table border = "1">
      <thead>
        <th>
          <td>Название</td>
        </th>
        <th>
          <td>Серия</td>
        </th>
        <th>
          <td>Мощность</td>
        </th>
        <th>
          <td>Кол-во оборотов </td>
        </th>
        <th>
          <td>КПД</td>
        </th>
        <th>
          <td>Коэфициент мощности</td>
        </th>
        <th>
          <td>Скольжение</td>
        </th>
        <th>
          <td>Максимальная кратность</td>
        </th>
        <th>
          <td>Действия</td>
        </th>
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.Name}}</td>
          <td>{{data.Serial}}</td>
          <td>{{data.Power}}</td>
          <td>{{data.RotationSpeed}}</td>
          <td>{{data.Perfomance}}</td>
          <td>{{data.PowerFactor}}</td>
          <td>{{data.Sliding}}</td>
          <td>{{data.MultiplicityMaximum}}</td>
          <td align="center">
            <router-link :to = "{name: 'AdminMotorsEdit',params: {id: data.id}}" class = "btn-primary btn">
              Редактировать
            </router-link>
            <router-link :to = "{name: 'AdminMotorsDelete',params: {id: data.id}}" class = "btn-danger btn">
              Удалить
            </router-link>
          </td>
        </tr>
      </thead>
    </table>
    <router-link :to = "{name: 'AdminMotorsCreate'}" class = "btn btn-success mt-3">
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
      api.getMotors()
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>