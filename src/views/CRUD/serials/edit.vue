<template>
  <form class = "form">
    <label for="Serial">Тип</label>
    <input name = "Serial" type="text" v-model = "Serial">
    <button type ="button" @click="validateForm()">Отправить</button>
  </form>
</template>

<script>
import api from "@/api/index.js"

export default {
  data(){
    return {
      id: 0,
      Serial: "",
    }
  },
  methods:{
    validateForm(){

      api.updateSerial({id: this.id,Serial: this.Serial}).then(
        () =>{
          // window.location.href = '/admin/serials'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
        }
      )
      // TODO: Исправить костыль с редиректом
    }
  },
  mounted(){
      api.getSerialById(this.$route.params.id)
      .then(res => {
        this.id = res.id
        this.Serial = res.Serial
      })
  }
}
</script>