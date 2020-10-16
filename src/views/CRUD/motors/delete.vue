<template>
  <div class = "form">
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Название:</span>
      <span>{{raw.Name}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Тип:</span>
      <span>{{raw.Serial}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Максимальная мощность:</span>
      <span>{{raw.Max_Power}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Минимальная мощность:</span>
      <span>{{raw.Min_Power}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Наличие полной комплектации:</span>
      <span>{{raw.Is_Full_Solution == 1 ? "Да" : "Нет"}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Наличие энергосберегающего режима:</span>
      <span>{{raw.Is_Enegry_Saving  == 1 ? "Да" : "Нет"}}</span>
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
      api.deleteMotor(this.$route.params.id).then(
        () =>{
          window.location.href = '/admin/motors'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
      })
    }
  },
  mounted(){
     api.getMotorById(this.$route.params.id)
      .then(res => { this.raw = res })
  }
}
</script>