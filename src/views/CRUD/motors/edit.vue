<template>
  <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
            <label for="Name">Название</label>
            <input class = "form-control" name = "Name" type="text" v-model = "Name">
        </div>
        <div class = "form-group col-4">
          <label for="Serial">Тип</label>
          <!-- TODO: Добавить запрос к базе с дальнейшим
                     выводом данных в выпадающее меню Serial -->
          <input class = "form-control" name = "Serial" type="text" v-model = "Serial">
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
          <input class = "form-check-input" name="IsFullSolution" type="checkbox" v-model="IsFullSolution">
          <label class = "form-check-label" for="IsFullSolution">Налиние полного решения</label>
        </div>
        <div class="form-group col-6">
          <input class = "form-check-input" name="IsEnergySaving" type="checkbox" v-model="IsEnergySaving">
          <label class = "form-check-label" for="IsEnergySaving">Наличие энергосберегающего режима</label>
        </div>
      </div>

      <button class = "btn-primary btn" type ="button" @click="validateForm()">Изменить</button>
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
      IsFullSolution: false,
      IsEnergySaving: false,
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

      api.updateMotor(motor).then(
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
      api.getMotorById(this.$route.params.id)
      .then(res => {
        this.id = res.id
        this.Name = res.Name
        this.Serial = res.Serial
        this.MaxPower = res.MaxPower
        this.MinPower = res.MinPower
        this.IsFullSolution = res.IsFullSolution
        this.IsEnergySaving = res.IsEnergySaving
      })
  }
}
</script>