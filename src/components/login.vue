<template>
  <section class = "login">
    <h3 class = "text-center">Авторизация</h3>
    <form class="auth-form form">
      <div v-if="isError == true" class = "bg-danger rounded alert">
        {{errorText || "Произошла ошибка"}}
      </div>
      <label class = "form-text" for = ""> Логин:
        <input class = "form-control" type = "name" v-model = "data.Login" required>
      </label>
      <label class = "form-text" for = ""> Пароль:
        <input class = "form-control" type = "password" v-model = "data.Pass" required>
      </label>
      <button class = "btn btn-primary" type = "button" @click="send()"> Отправить
      </button>
    </form>
  </section>
</template>
<script>
import User from "../models/user"
import {mapActions} from "vuex"

export default {
  data(){
    return {
      data:{
        Login: this.Login,
        Pass: this.Pass,
      },
      isError: false,
      errorText: "",
      isSuccess: false,
      isSended: false,
    }
  },
  methods:{
    ...mapActions(['login']),
    async send(){
      this.isSuccess = false;
      this.isError = false;
      const user = new User(this.data);
      this.login(user).then(
        (res) => {
          this.isSuccess = true
          this.$router.push("/")
        },
        (responceError) => {
          console.log(responceError)
          this.isError = true;
          this.errorText = responceError;
        }
      )
    }
  },
}
</script>

<style>
  .alert{
    padding: 10px;
    font-size: 18px;
    color: white;
    text-align: center
  }
</style>