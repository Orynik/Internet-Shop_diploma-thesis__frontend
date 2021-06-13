<template>
<div>
  <h1 class = "text-center">Удаление записи</h1>
  <div class = "form">
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Название:</span>
      <span>{{raw.Name}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Серия:</span>
      <span>{{raw.Serial}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Производитель :</span>
      <span>{{raw.Manufacturer}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Цена:</span>
      <span>{{raw.Price}}</span>
    </div>
    <button class = "btn btn-danger" type ="button" @click="deleteData()">Удалить</button>
  </div>
  <router-link :to = "{name: 'AdminProducts'}" class = "btn btn-success mt-3">
    Назад
  </router-link>
</div>
</template>

<script>

import api from "@/api/AllRequestApi.js"

export default {
  data(){
    return{
      raw: []
    }
  },
  methods:{
    deleteData(){
      api.deleteProduct(this.$route.params.id).then(
        () =>{
          window.location.href = '/admin/products'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
      })
    }
  },
  mounted(){
     api.getProductById(this.$route.params.id)
      .then(res => { this.raw = res })
  }
}
</script>