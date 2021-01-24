<template>
   <div>
    <h3 class = "text-center">Создание новой записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-6">
            <label for="Company">Название</label>
            <input class = "form-control" name = "Company" type="text" v-model = "Company">
        </div>
        <div class="form-group col-6">
          <label for="Location">Расположение</label>
          <input class = "form-control" name = "Location" type="text" v-model = "Location">
        </div>
        <div class="form-group col-6">
          <label for="tel">Номер мобильный</label>
          <input class = "form-control" name = "tel" type="text" v-model = "Tel">
        </div>
      </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Создать</button>
    </form>
    <router-link :to = "{name: 'AdminManufacturers'}" class = "btn btn-success mt-3">
      Назад
    </router-link>
  </div>
</template>

<script>
import api from "@/api/index.js"

export default {
  data(){
    return {
      id: 0,
      Company: "",
      Location: "",
      Tel: "",
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
      api.createManufacturer({Company: this.Company, Location: this.Location}).then(
        () =>{
          // window.location.href = '/admin/manufacturers'
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