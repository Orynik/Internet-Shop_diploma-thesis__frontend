<template>
  <form class = "form">
    <label for="Name">Название</label>
    <input name = "Name" type="text" v-model = "Name">
    <label for="Serial">Тип</label>
    <!-- TODO: Добавить запрос к базе с дальнейшим
               выводом данных в выпадающее меню Serial -->
    <input name = "Serial" type="text" v-model = "Serial">
    <label for="Max_Power">Максимальная мощность</label>
    <input name = "Max_Power" type="number" v-model = "Max_Power">
    <label for="Min_Power">Минимальная мощность</label>
    <input name="Min_Power" type="number" v-model = "Min_Power">
    <label for="Is_Full_Solution">Налиние полного решения</label>
    <input name="Is_Full_Solution" type="checkbox" v-model="Is_Full_Solution">
    <label for="Is_Energy_Saving">Наличие энергосберегающего режима</label>
    <input name="Is_Energy_Saving" type="checkbox" v-model="Is_Energy_Saving">
    <button type ="button" @click="validateForm()">Отправить</button>
  </form>
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
      Max_Power: "",
      Min_Power: "",
      Is_Full_Solution: "",
      Is_Energy_Saving: "",
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
      const motor = new Motor(
        this.id,
        this.Name,
        this.Serial,
        this.Max_Power,
        this.Min_Power,
        this.Is_Full_Solution,
        this.Is_Energy_Saving
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
  }
}
</script>