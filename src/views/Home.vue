<template>
  <div class="home">
    <section class = "products container-fluid">
        <!-- <div class = "products-case products__popular container">
          <div class = "products-tab">
            <h3 class = "products-tab__title products-tab__title-left">Популярные товары</h3>
          </div>
          <List />
        </div> -->
        <div class = "products-case products__latest container">
          <div class = "products-tab">
            <h3 class = "products-tab__title products-tab__title-left">Новые товары</h3>
          </div>
          <List />
        </div>
    </section>
  </div>
</template>

<script>
import List from '@/components/Product_List.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>
<style scoped>
  .home{
    height: 100vh;
  }
</style>
