<template>
     <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row">
        <div class = "form-group col-12">
            <label for="Company">Название</label>
            <input class = "form-control" name = "Company" type="text" v-model = "Company">
        </div>
        <div class = "form-group col-6">
            <label for="Tel">Номер мобильный</label>
            <input class = "form-control" name = "Tel" type="text" v-model = "Tel">
        </div>
        <div class = "form-group col-6">
            <label for="Email">Электронная почта</label>
            <input class = "form-control" name = "Email" type="text" v-model = "Email">
        </div>
        <div class="form-group col-4">
          <label for="ZipCode">Почтовый индекс</label>
          <input class = "form-control" name = "ZipCode" type="text" v-model = "ZipCode">
        </div>
        <div class="form-group col-4">
          <label for="Country">Страна</label>
          <input class = "form-control" name = "Country" type="text" v-model = "Country">
        </div>
        <div class="form-group col-4">
          <label for="City">Город</label>
          <input class = "form-control" name = "City" type="text" v-model = "City">
        </div>
        <div class="form-group col-6">
          <label for="Street">Улица</label>
          <input class = "form-control" name = "Street" type="text" v-model = "Street">
        </div>
        <div class="form-group col-6">
          <label for="Building">Строение</label>
          <input class = "form-control" name = "Building" type="text" v-model = "Building">
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
import api from "@/api/AllRequestApi.js"
import Manufacturer from "@/models/manufacturers.js"

export default {
  data(){
    return {
      id: 0,
      Company: "",
      Country: "",
      Email: "",
      Tel: "",
      ZipCode: 0,
      Street: "",
      City: "",
      Building: ""
    }
  },
  methods:{
    validateForm(){

      const raw = new Manufacturer(
        {
          Zip: this.ZipCode,
          Country: this.Country,
          Street: this.Street,
          City: this.City,
          Building: this.Building
        },
        this.Company,
        this.Email,
        this.Tel,
      )

      raw.id = this.id;


      // TODO: Добавить валидацию полей
      api.updateManufacturer(raw).then(
        () =>{
          this.$route.push('/admin/manufacturers')
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
        this.Country = res.Country
        this.Email = res.Email
        this.Tel = res.Tel
        this.ZipCode = res.ZipCode
        this.Street = res.Street
        this.City = res.City
        this.Building = res.Building
      })
  }
}
</script>