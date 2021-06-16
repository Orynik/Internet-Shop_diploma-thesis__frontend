<template>
	<section class = "forminput">
    <h3 class = "text-center m-3">Форма для отправки заказа</h3>
    <b-alert class = "m-3" variant="danger" v-model = "isError" dismissible>
      {{ErrorText}}
    </b-alert>
    <b-alert class = "m-3" variant="success" v-model = "isSuccess">
      Ваш заказ был принят на обработку, в ближайшее время вам напишет наш менеджер<br>
      <router-link class = "btn btn-primary" to ="/">Вернуться на главную страницу</router-link>
    </b-alert>
		<b-form class = "w-50 mx-auto mt-5" v-show="!isSuccess">
      <b-form-group
        id="Country_label"
        label="Страна:"
        label-for="Country"
        description="Введите вашу страну."
      >
        <b-form-input
          id="Country"
          v-model="addr.Country"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="Email_label"
        label="Почта:"
        label-for="Email"
        description="На эту почту придет ответ от нашего менеджера заказов."
      >
        <b-form-input
          id="Email"
          v-model="addr.Email"
          type="email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="ZipCode_label"
        label="Почтовый индекс:"
        label-for="ZipCode"
        description="Почтовый индекс должен быть целочиленным и быть равны 6ти."
      >
        <b-form-input
          id="ZipCode"
          v-model="addr.ZipCode"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group
            id="City_label"
            label="Город:"
            label-for="City"
            description="Город может быть на русском и на английском."
            class = ""
          >
            <b-form-input
              id="City"
              v-model="addr.City"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="Street_label"
            label="Улица:"
            label-for="Street"
            description="Улица может быть на русском и на английском."
          >
            <b-form-input
              id="Street"
              v-model="addr.Street"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="Building_label"
            label="Дом:"
            label-for="Building"
            description="Дом должен быть введен цифрой."
          >
            <b-form-input
              id="Building"
              v-model="addr.Building"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="Apartament_label"
            label="Квартира:"
            label-for="Apartament"
            description="Квартира должена быть введена цифрой."
          >
            <b-form-input
              id="Street"
              v-model="addr.Apartament"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button variant="primary" @click="send()">Отправить</b-button>
		</b-form>
	</section>
</template>
<script>
import Address from "../models/address"
import {mapActions} from "vuex"
export default {
  data(){
    return {
      addr:{
        ZipCode: 0,
        Country: "",
        Street: "",
        City: "",
        Building: 32,
        Apartament: 60,
        Email: ""
      },
      isError: false,
      isSuccess: false,
      ErrorText: ""
    }
  },
  methods:{
    ...mapActions(["sendOrderToMail"]),
    async send(){
      this.isSuccess = false;
      this.isError = false;

      const addressData = new Address(this.addr)
      const result = await this.sendOrderToMail(addressData)
      if(result === true){
        this.isSuccess = true;
      }else if(typeof result === "object"){
        console.log(result)
        this.ErrorText = result
        this.isError = true;
      }
    }
  }
}
</script>

<style scoped>
 .forminput{
   padding-top: 20px;
   background: #262a32;
   color: white;
 }
 .form{
   margin-top: 0;
 }
</style>