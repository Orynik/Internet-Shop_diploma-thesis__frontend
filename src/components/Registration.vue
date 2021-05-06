<template>
  <section class = "registration">
    <form class="auth-form form">
      <h3 class = "text-center">Регистрация</h3>
      <div v-if="isSuccess == true" class = "bg-primary rounded alert">
        <span>Вы успешно зарегистрировались!</span>
        <router-link to:="/reg">Перейти на страницу входа</router-link>
      </div>
      <div v-if="isError == true" class = "bg-danger rounded alert">
        {{errorText || "Произошла ошибка"}}
      </div>
      <label class = "form-text" for = ""> Имя:
        <input class = "form-control" type = "name" v-model = "Name" required>
      </label>
      <label class="form-floating"> Фамилия:
        <input type="name" class="form-control" id="floatingInputValue" v-model = "Fam" required>
      </label>
      <label class="form-floating"> Email:
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" v-model = "Email" required>
      </label>
      <label class = "form-text" for = ""> Телефон:
        <input class = "form-control" type = "tel" v-model = "Phone" required>
      </label>
      <label class = "form-text" for = ""> Логин:
        <input class = "form-control" type = "name" v-model = "Login" required>
      </label>
      <label class = "form-text" for = ""> Пароль:
        <input class = "form-control" type = "password" v-model = "Pass" required>
      </label>
      <button class = "btn btn-primary" type = "button" @click="send()"> Отправить
      </button>
    </form>
  </section>
</template>
<script>
import api from "../api/index.js"
import User from "../models/user"

export default {
  data(){
    return {
      Login: "",
      Name: "",
      Email: "",
      Fam: "",
      Pass: "",
      Phone: "",
      isError: false,
      errorText: "",
      isSuccess: false,
      isSended: false,
    }
  },
  methods:{
    send(){
      this.isSuccess = false;
      this.isError = false;
      const user = new User(this.Login,this.Name,this.Fam,this.Phone,this.Pass);
      api.registratonUser(user).then(
        () => {
          this.isSuccess = true
          // window.location.href = '/'
        },
        (responceError) => {
          this.isError = true;
          console.log(responceError.response)
          if(responceError.response.data === 1062){
             this.errorText = "Пользователь с таким логином уже существует";
          }
          else{
             this.errorText = "Неизвестная ошибка"
          }
        }
      )
    }
  }
}
</script>

<style>
  .alert{
    padding: 10px;
    font-size: 18px;
    color: white;
    text-align: center
  }

  .success{
    
  }
</style>