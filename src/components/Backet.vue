<template>
  <section class = "backet container-fluid">
    <h1 class = "text-center">Корзина</h1>
    <h3 v-if = "isEmpty" class = "text-center">Пока товаров нету</h3>
    <table class = "mx-auto" v-else>
      <tr>
        <th>Название товара</th>
        <th>Цена</th>
        <th>Действия</th>
      </tr>
      <tr v-for = "(item,idx) in raw" :key = "idx">
        <!-- TODO: Переделать решение, слишком высокоя нагрузка при большом объеме данных -->
        <td>{{JSON.parse(item).Name}}</td>
        <td>{{JSON.parse(item).Price}}</td>
        <td>
          <button class = "button">Х</button>
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
export default {
  data(){
    return {
      raw: {},
      isEmpty: true
    }
  },
  mounted(){
    if (localStorage.Products != null){
      this.isEmpty = false
      this.raw = localStorage.getItem('Products').split("{|}")
    }
  }
}
</script>

<style scoped>
  h1{
    /* margin: 0; */
  }
  .backet{
    background: #262a32;

    color: #fff;
  }
</style>