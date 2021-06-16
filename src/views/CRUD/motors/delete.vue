<template>
<div>
<!-- TODO: Изменить стиль delete модели -->
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
      <span>{{raw.Power}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Кол-во оборотов:</span>
      <span>{{raw.RotationSpeed}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">КПД:</span>
      <span>{{raw.Perfomance}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Коэфициент мощности:</span>
      <span>{{raw.PowerFactor}}</span>
    </div>
    <div class = "form-div__wrapper">
      <span class = "form-div__wrapper-title">Скольжение:</span>
      <span>{{raw.Sliding}}</span>
    </div>
    <div class="form-div__wrapper">
      <span class = "form-div__wrapper-title">Максимальная кратность:</span>
      <span>{{raw.MultiplicityMaximum}}</span>
    </div>
    <button class = "btn btn-danger" type ="button" @click="deleteData()">Удалить</button>
  </div>
  <router-link :to = "{name: 'AdminMotors'}" class = "btn btn-success mt-3">
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
      api.deleteMotor(this.$route.params.id).then(
        () =>{
          this.$route.push('/admin/motors')
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