<template>
  <div class = "form">
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">id:</span>
      <span v-if="raw.id != undefined">{{raw.id}}</span>
      <span v-else>Неизвестно</span>
      <span class = "form-div__wrapper-title">Serial:</span>
      <span>{{raw.Serial}}</span>
    </div>
    <button type ="button" @click="deleteData()">Отправить</button>
  </div>
</template>

<script>

import api from "@/api/index.js"

export default {
  data(){
    return{
      raw: []
    }
  },
  methods:{
    deleteData(){
      api.deleteSerial(this.$route.params.id).then(
        () =>{
          window.location.href = '/admin/serials'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
      })
    }
  },
  mounted(){
     api.getSerialById(this.$route.params.id)
      .then(res => {console.log(res); this.raw = res })
  }
}
</script>