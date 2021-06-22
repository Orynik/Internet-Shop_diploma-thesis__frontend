<template>
   <div>
    <h3 class = "text-center">Создание новой записи</h3>
    <h4 class = "text-center">Прежде чем выбирать серию, выбрите название мотора (первое поле).</h4>
     <b-alert class = "m-3" variant="danger" v-model = "isError" dismissible>
      {{errorText}}
      <span v-if = "errorList != []">
        <ul v-for = "(item,idx) in errorList" :key = "idx">
          <li>
            {{item}}
          </li>
        </ul>
      </span>
    </b-alert>
    <form class = "form">
      <div class="form-row col-12 align-items-center">
        <div class = "form-group col-12">
          <label for="Name">Название</label>
            <select id="Name" class="form-control" v-model = "Name">
              <option v-for = "(item,index) in Motors" :key ="index">
                {{item.Name}}
              </option>
            </select>
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
      Manufacturers: [],
      Motors: [],
      errorList: [],

      showPreview: false,
      imagePreview: "",

      isError: false,
      errorText: ""
    }
  },
  methods:{
    validateForm(){
      if(+this.Price === 0){
        this.errorList.push("Введенна некорректная цена. Исправьте поле.")
        this.isError = true;
      }
      else{
        this.isError = false;
         // TODO: Добавить валидацию полей
        const rawData = new FormData();
        rawData.append('file', this.file)
        rawData.append('Name', this.Name)
        rawData.append('Serial', this.Serial)
        rawData.append('Price', this.Price)
        rawData.append('Manufacturer', this.Manufacturer)
        rawData.append('Description', this.Description)


      api.createProduct(rawData).then(
        (res) =>{
          console.log(res)
          this.$router.push("/admin/products")
        },
        (err) => {
          this.isError = true;
          this.errorText = err;
          window.scrollTo(0,0);
        }
      )
      }
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
  watch: {
    Name(){
      api.getSerials(this.Name).then(
        req =>{ this.List = req.data}
      )
    }
  },
  mounted(){
      api.getManufacturers().then(
        req =>{ this.Manufacturers = req.data}
      )
      api.getMotors().then(
        req =>{ this.Motors = req.data}
      )
    }
}
</script>