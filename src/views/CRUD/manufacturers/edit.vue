<template>
  <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
            <label for="Company">Компания</label>
            <input class = "form-control" name = "Company" type="text" v-model = "Company">
        </div>
        <div class = "form-group col-4">
          <label for="Location">Расположение</label>
          <input class = "form-control" name = "Location" type="text" v-model = "Location">
        </div>
        <div class = "form-group col-4">
          <label for="Tel">Номер</label>
          <input class = "form-control" name = "Tel" type="text" v-model = "Tel">
        </div>
      </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Изменить</button>
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
      Tel: ""
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
      api.updateManufacturer({id: this.id, Company: this.Company, Location: this.Location, Tel: this.Tel}).then(
        () =>{
          window.location.href = '/admin/manufacturers'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
        }
      )
      // TODO: Исправить костыль с редиректом
    }
  },
  mounted(){
      api.getManufacturerById(this.$route.params.id)
      .then(res => {
        this.id = res.id
        this.Company = res.Company
        this.Location = res.Location
        this.Tel = res.Tel
      })
  }
}
</script>