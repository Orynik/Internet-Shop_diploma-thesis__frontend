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
        <tr v-for = "(data,index) in raw" v-bind:key = "index">
          <td>{{data.id}}</td>
          <td>{{data.Serial}}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      raw: {},
    }
  },
  mounted(){
      axios.get(
        "http://localhost:3000/Motors",
      )
      .then(res => {
        this.raw = res.data
      })
  }
}
</script>