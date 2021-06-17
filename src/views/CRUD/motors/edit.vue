<template>
   <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
            <label for="Name">Название</label>
            <input class = "form-control" name = "Name" type="text" v-model = "Name">
        </div>
        <div class="form-group col-12">
          <label for="Serial">Тип</label>
          <select id="Serial" class="form-control" v-model = "Serial">
            <option v-for = "(item,index) in List" :key ="index">
              {{item.Serial}}
            </option>
          </select>
        </div>
        <div class="form-group col-4">
          <label for="OperatingVoltage">Рабочее напряжение</label>
          <input class = "form-control" name = "OperatingVoltage" type="number" v-model = "OperatingVoltage">
        </div>
        <div class="form-group col-4">
          <label for="Power">Мощность</label>
          <input class = "form-control" name = "Power" type="number" v-model = "Power" step = "0.01">
        </div>
        <div class="form-group col-4">
          <label for="Perfomance">КПД</label>
          <input class = "form-control" name="Perfomance" type="number" v-model = "Perfomance" step = "0.1" max = "100">
        </div>
        <div class="form-group col-4">
          <label for="RotationSpeed">Кол-во оборотов</label>
          <input class = "form-control" name="RotationSpeed" type="number" v-model = "RotationSpeed" step = "0.1">
        </div>
        <div class="form-group col-4">
          <label for="PowerFactor">Коэфициент мощности</label>
          <input class = "form-control" name="PowerFactor" type="number" v-model = "PowerFactor" step = "0.01" max = "1">
        </div>
        <div class="form-group col-4">
          <label for="Sliding">Скольжение </label>
          <input class = "form-control" name="Sliding" type="number" v-model = "Sliding" step = "1" max = "100">
        </div>
        <div class="form-group col-4">
          <label for="MultiplicityMaximum">Максимальная кратность </label>
          <input class = "form-control" name="MultiplicityMaximum" type="number" v-model = "MultiplicityMaximum" step = "1" max = "100">
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
import api from "@/api/AllRequestApi.js"
import Motor from "@/models/motor.js"

export default {
  data(){
    return {
      id: 0,
      Name: "",
      Serial: "",
      Power: "",
      RotationSpeed: "",
      Perfomance: "",
      PowerFactor: "",
      Sliding: "",
      MultiplicityMaximum: "",
      OperatingVoltage: "",
      List: []
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
      const motor = new Motor(
        this.Name,
        this.Serial,
        this.Power,
        this.RotationSpeed,
        this.Perfomance,
        this.PowerFactor,
        this.Sliding,
        this.MultiplicityMaximum,
        this.OperatingVoltage
      )

      motor.id = this.id;

      api.updateMotor(motor).then(
        () =>{
          this.$router.push('/admin/motors')
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
        this.Power = res.Power
        this.Perfomance = res.Perfomance
        this.RotationSpeed = res.RotationSpeed
        this.Perfomance = res.Perfomance
        this.PowerFactor = res.PowerFactor
        this.Sliding = res.Sliding
        this.MultiplicityMaximum = res.MultiplicityMaximum
        this.OperatingVoltage = res.OperatingVoltage
      })
      api.getSerials().then(
        req =>{ this.List = req.data}
      )
  }
}
</script>