<template>
  <section class = "backet container-fluid">
    <h1 class = "text-center">Корзина</h1>
    <div v-if = "cartData.length == 0" >
      <h3 class = "text-center">Товаров в корзине нет, как только вы добавите товары они отобразятся здесь. Вы можете перейти в 
        <router-link to = "/catalog" class = "btn btn-primary">Каталог</router-link> и начать выбирать товар</h3>
    </div>
    <section v-else>
         <table class = "mx-auto">
      <tr>
        <th>Название кродукта</th>
        <th>Серия продукта</th>
        <th>Производитель</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Действия</th>
      </tr>
      <tr v-for = "(item,idx) in cartData" :key = "idx">
        <td :id = "item.Cart_id">{{item.Name}}</td>
        <td>{{item.Serial}}</td>
        <td>{{item.Manufacturer}}</td>
        <td>{{item.AmountItems}}</td>
        <td>{{item.Price}}</td>
        <td>
          <button class = "button btn btn-danger" v-on:click="deleteItem(item.Cart_id)">Х</button>
        </td>
      </tr>
    </table>
    <div class = "mx-auto" >
      <router-link class = "btn btn-success" to = "/createOrder">
        Заказать
      </router-link>
    </div>
    </section>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  data(){
    return {
      raw: {},
      isEmpty: false
    }
  },
  methods:{
    ...mapGetters(["getCartData"]),
    ...mapActions(["deleteFromCart","getCart"]),
    deleteItem(CartId){
      this.deleteFromCart(CartId).then(
        () => {
          this.getCart()
        }
      )
    }
  },
  computed:{
    cartData(){
      return this.getCartData()
    }
  }
}
</script>

<style scoped>
  .backet{
    background: #262a32;

    color: #fff;
  }
  .btn-success{
    width: 150px;
  }
</style>