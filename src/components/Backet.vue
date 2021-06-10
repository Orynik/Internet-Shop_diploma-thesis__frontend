<template>
  <section class = "backet container-fluid">
    <h1 class = "text-center">Корзина</h1>
    <h3 v-if = "isEmpty" class = "text-center">Пока товаров нету</h3>
    <table class = "mx-auto" v-else>
      <tr>
        <th>Название кродукта</th>
        <th>Серия продукта</th>
        <th>Производитель</th>
        <th>Количество</th>
        <th>Цена</th>
        <th>Действия</th>
      </tr>
      <tr v-for = "(item,idx) in cartData" :key = "idx">
        <!-- TODO: Переделать решение, слишком высокоя нагрузка при большом объеме данных -->
        <td>{{item.Name}}</td>
        <td>{{item.Serial}}</td>
        <td>{{item.Manufacturer}}</td>
        <td>{{item.AmountItems}}</td>
        <td>{{item.Price}}</td>
        <td>
          <button class = "button btn btn-primary" v-on:click="deleteItem()">Х</button>
        </td>
      </tr>
    </table>

    <div class = "mx-auto w-25">
      <a class = "button__buy button">
        Заказать
      </a>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data(){
    return {
      raw: {},
      isEmpty: false
    }
  },
  methods:{
    ...mapGetters(["getCartData"]),
    deleteItem(){
      alert(1)
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
</style>