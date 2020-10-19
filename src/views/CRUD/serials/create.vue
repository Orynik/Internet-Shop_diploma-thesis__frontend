<template>
  <form class = "form">
    <label for="Serial">Serial</label>
    <input name = "Serial" type="text" v-model = "Serial">
    <button type ="button" @click="validateForm()">Отправить</button>
  </form>
</template>

<script>
import api from "@/api/index.js"

export default {
  data(){
    return {
      Serial: ""
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей

      api.createSerial({Serial: this.Serial}).then(
        () =>{
          window.location.href = '/admin/serials'
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