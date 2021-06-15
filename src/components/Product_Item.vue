<template>
  <section class = "product-card container-fluid">
    <div class = "product-card__wrapper row justify-content-center">
        <img class = "product-card__img img-fluid col-4" :src="raw.LintToImage" alt="" >
        <div class = "product-card__info col-4 d-flex flex-column justify-content-center">
          <h1 class  = "product-info__title product-info__field ">Название: <span>{{raw.Name}}</span> </h1>
          <span class = "product-info__serial product-info__field">Серия: <span>{{raw.Serial}}</span></span>
          <span class = "product-info__manufacturer product-info__field">Производитель: <span>{{raw.Manufacturer}}</span></span>
          <span class = "product-info__perfomance product-info__field">КПД: <span>{{additional.Perfomance * 100}} %</span></span>
          <span class = "product-info__operatingvoltage product-info__field">Номинальное напряжение: <span>{{additional.OperatingVoltage}}</span></span>
          <span class = "product-info__power product-info__field">Мощность: <span>{{additional.Power}} кВт.</span></span>
          <span class = "product-info__rodationspeed product-info__field">Кол-во оборотов: <span>{{additional.RotationSpeed}} / мин.</span></span>
          <span class = "product-info__sliding product-info__field">Скольжение: <span>{{additional.Sliding}} %</span></span>
          <span class = "product-info__powerfactor product-info__field">Коэфициент мощности (cosφ): <span>{{additional.PowerFactor * 100}} %</span></span>
          

          <div class = "product-buying d-flex justify-content-start align-items-center">
            <span class = "product-buing__price">{{raw.Price}} Руб.</span>
            <button class = "button button__buy button__buy-big"  @click = "send(raw)">Купить</button>
          </div>
        </div>
    </div>
  </section>
</template>
<script>
import api from "@/api/AllRequestApi.js"
import {mapActions} from "vuex"

export default {
  data(){
    return {
      raw: {},
      additional: {}
    }
  },
  props:{
    id: {
      type: String,
      required: true
    }
  },
  mounted(){
    api.getProductById(this.id).then(
      (obj) => {
        this.raw = obj;
        api.getMotorByNameAndSerial(obj.Name, obj.Serial).then(
          (res) => {this.additional = res; console.log(2);},
          (err) => alert(err)
        )
      },
      (err) => alert(err)
    )
  },
  methods:{
    ...mapActions(["addToCart"]),
        send(item){
            const primaryInItem = {
                Name: item.Name,
                Serial: item.Serial
            }
            this.addToCart(primaryInItem).then(
                (res) => {
                    console.dir(res)
                    this.$router.push("/backet")
                },
                (err) => {
                    alert(`Произошли технические недолапки: ${err}`)
                }
            )
        }
  }
}
</script>