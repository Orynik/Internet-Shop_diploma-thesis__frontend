<template>
  <div>
<!-- TODO: Изменить стиль delete модели -->
    <div class = "form">
      <div class = "form-div__wrapper">
        <span class = "form-div__wrapper-title">Название:</span>
        <span>{{raw.Company}}</span>
      </div>
      <div class = "form-div__wrapper">
        <span class = "form-div__wrapper-title">Тип:</span>
        <span>{{raw.Location}}</span>
      </div>
      <button class = "btn btn-danger" type ="button" @click="deleteData()">Удалить</button>
    </div>
    <router-link :to = "{name: 'AdminManufacturers'}" class = "btn btn-success mt-3">
    Назад
    </router-link>
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
      api.deleteManufacturer(this.$route.params.id).then(
        () =>{
          window.location.href = '/admin/manufacturers'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
      })
    }
  },
  mounted(){
     api.getManufacturerById(this.$route.params.id)
      .then(res => { this.raw = res })
  }
}
</script>