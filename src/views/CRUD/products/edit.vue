<template>
  <div>
    <h3 class = "text-center">Редактирование записи</h3>
    <form class = "form">
      <div class="form-row align-items-center">
        <div class = "form-group col-12">
            <label for="Name">Название</label>
            <input class = "form-control" name = "Name" type="text" v-model = "Name">
        </div>
        <div class="form-group col-md-4">
          <label for="Serial">Серия</label>
          <input type="text" class="form-control" id = "Name" v-model = "Serial">
        </div>
        <div class="form-group col-md-4">
          <label for="Manufacturer">Производитель</label>
          <input type="text" class="form-control" id = "Name" v-model = "Manufacturer">
        </div>
        <div class="form-group col-4">
          <label for="Price">Цена</label>
          <input class = "form-control" name = "Price" type="number" v-model = "Price">
        </div>
        <div class="form-group col-6">
          <label for="file">Фото продукта</label>
          <input class = "form-control" name="Image" type="file" ref="file" id = "file" v-on:change="handleFileUpload()">
        </div>
        <div class ="form-group m-auto">
          <img :src = "imagePreview" alt="" width = "150" height="135">
        </div>
        <div class="form-group col-12">
          <label for="Description">Описание</label>
          <textarea class = "form-control" name="Description" v-model="Description"></textarea>
        </div>
      </div>
      <button class = "btn-primary btn" type ="button" @click="validateForm()">Создать</button>
    </form>
    <router-link :to = "{name: 'AdminProducts'}" class = "btn btn-success mt-3">
      Назад
    </router-link>
  </div>
</template>

<script>
import api from "@/api/AllRequestApi.js"
// import Product from "@/models/product.js"

export default {
  data(){
    return {
      id: 0,
      Name: "",
      Serial: "",
      Price: "",
      Description: "",
      Manufacturer: "",

      showPreview: false,
      imagePreview: ""
    }
  },
  methods:{
    validateForm(){
      // TODO: Добавить валидацию полей
        const rawData = new FormData();
        rawData.append('id',this.id)
        rawData.append('file', this.file)
        rawData.append('name', this.Name)
        rawData.append('serial', this.Serial)
        rawData.append('price', this.Price)
        rawData.append('manufacturer', this.Manufacturer)
        rawData.append('description', this.Description)

      api.updateProduct(rawData).then(
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

      const reader  = new FileReader();

      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.imagePreview = reader.result;
      }.bind(this), false);

      if( this.file ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
          reader.readAsDataURL( this.file );
        }
      }
    }
  },
  mounted(){
      api.getProductById(this.$route.params.id).then(
        req =>{
          this.Name = req.Name;
          this.Serial = req.Serial;
          this.Price = req.Price;
          this.Manufacturer = req.Manufacturer;
          this.Description = req.Description;
          this.id = req.id;
        }
      )
    }
}
</script>