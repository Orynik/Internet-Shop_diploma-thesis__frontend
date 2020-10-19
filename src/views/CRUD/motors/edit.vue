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
          <label for="Max_Power">Максимальная мощность</label>
          <input class = "form-control" name = "Max_Power" type="number" v-model = "Max_Power">
        </div>
        <div class="form-group col-4">
          <label for="Min_Power">Минимальная мощность</label>
          <input class = "form-control" name="Min_Power" type="number" v-model = "Min_Power">
        </div>
        <legend>Дополнительные особенности:</legend>
        <div class="form-group col-6">
          <input class = "form-check-input" name="Is_Full_Solution" type="checkbox" v-model="Is_Full_Solution">
          <label class = "form-check-label" for="Is_Full_Solution">Налиние полного решения</label>
        </div>
        <div class="form-group col-6">
          <input class = "form-check-input" name="Is_Energy_Saving" type="checkbox" v-model="Is_Energy_Saving">
          <label class = "form-check-label" for="Is_Energy_Saving">Наличие энергосберегающего режима</label>
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
        this.Max_Power = res.Max_Power
        this.Min_Power = res.Min_Power
        this.Is_Full_Solution = res.Is_Full_Solution
        this.Is_Energy_Saving = res.Is_Energy_Saving
      })
  }
}
</script>