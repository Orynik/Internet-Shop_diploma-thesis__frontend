<template>
   <div>
    <h3 class = "text-center">Создание новой записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
            <label for="Name">Название</label>
            <input class = "form-control" name = "Name" type="text" v-model = "Name">
        </div>
        <div class="form-group col-md-4">
          <label for="Serial">Тип</label>
          <select id="Serial" class="form-control" v-model = "Serial">
            <option v-for = "(item,index) in List" :key ="index">
              {{item.Serial}}
            </option>
          </select>
        </div>
        <div class="form-group col-4">
          <label for="MaxPower">Максимальная мощность</label>
          <input class = "form-control" name = "MaxPower" type="number" v-model = "MaxPower">
        </div>
        <div class="form-group col-4">
          <label for="MinPower">Минимальная мощность</label>
          <input class = "form-control" name="MinPower" type="number" v-model = "MinPower">
        </div>
        <legend>Дополнительные особенности:</legend>
        <div class="form-group col-6">
          <input class = "form-check-input" name="IsFullSolution" type="checkbox" v-model="IsFullSolution" id = "IsFullSolution">
          <label class = "form-check-label" for="IsFullSolution">Наличие полного решения</label>
        </div>
        <div class="form-group col-6">
          <input class = "form-check-input" name="IsEnergySaving" type="checkbox" v-model="IsEnergySaving">
          <label class = "form-check-label" for="IsEnergySaving">Наличие энергосберегающего режима</label>
        </div>
      </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Создать</button>
    </form>
    <router-link :to = "{name: 'AdminMotors'}" class = "btn btn-success mt-3">
      Назад
    </router-link>
  </div>
</template>

<script>
import api from "@/api/index.js"
import Motor from "@/models/motor.js"

export default {
  data(){
    return {
      id: 0,
      Name: "",
      Serial: "",
      MaxPower: "",
      MinPower: "",
      IsFullSolution: 0,
      IsEnergySaving: 0,
      List: []
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
      const motor = new Motor(
        this.id,
        this.Name,
        this.Serial,
        this.MaxPower,
        this.MinPower,
        this.IsFullSolution,
        this.IsEnergySaving
      )

      api.createMotor(motor).then(
        () =>{
          window.location.href = '/admin/motors'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
        }
      )
      // TODO: Исправить костыль с редиректом
    }
  },
  mounted(){
      api.getSerials().then(
        req =>{ this.List = req.data}
      )
    }
}
</script>