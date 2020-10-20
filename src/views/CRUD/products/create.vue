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
          <label for="Serial">Серия</label>
          <select id="Serial" class="form-control" v-model = "Serial">
            <option v-for = "(item,index) in List" :key ="index">
              {{item.Serial}}
            </option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="Manufacturer">Производитель</label>
          <select id="Manufacturer" class="form-control" v-model = "Manufacturer">
            <option v-for = "(item,index) in Manufacturers" :key ="index">
              {{item.Company}}
            </option>
          </select>
        </div>
        <div class="form-group col-4">
          <label for="Price">Цена</label>
          <input class = "form-control" name = "Price" type="number" v-model = "Price">
        </div>
        <div class="form-group col-12">
          <label for="file">Фото продукта</label>
          <input class = "form-control" name="Image" type="file" ref="file" id = "file" v-on:change="handleFileUpload()">
        </div>
        <div class="form-group col-12">
          <label for="Description">Описание</label>
          <textarea class = "form-control" name="Description" v-model="Description"></textarea>
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
import Product from "@/models/product.js"

export default {
  data(){
    return {
      id: 0,
      Name: "",
      Serial: "",
      Price: "",
      Image: "",
      Description: "",
      Manufacturer: "",
      file: "",
      List: [],
      Manufacturers: []
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
        const formData = new FormData();
        formData.append('file', this.file);

      const product = new Product(
        this.Name,
        this.Serial,
        this.Price,
        // TODO: Решить проблему с отправкой изображения
        // (на json-server не получается проставить заголовок 'multipart/form-data')
        formData,
        this.Manufacturer,
        this.Description,
        new Date().getTime()
      )

      api.createProduct(product).then(
        () =>{
          // window.location.href = '/admin/motors'
        },
        (err) => {
          alert("Произошла ошибка:" + err)
        }
      )
      // TODO: Исправить костыль с редиректом
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    }
  },
  mounted(){
      api.getSerials().then(
        req =>{ this.List = req.data}
      )
      api.getManufacturers().then(
        req =>{ this.Manufacturers = req.data}
      )
    }
}
</script>