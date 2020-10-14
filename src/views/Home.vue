<template>
  <div class="home">
    <section class = "products container-fluid">
        <div class = "products-case products__popular container">
          <h3 class = " products__popular-title">
            Популярные товары
          </h3>
          <List />
        </div>
        <div class = "products-case products__latest container">
          <h3 class = " products__popular-title">
            Новые товары
          </h3>
          <List />
        </div>
    </section>
    <section class="banner container-fluid">
      <div class = "banner__text">
        Баннер, потом кастомизирую
      </div>
    </section>
        <section class = "products container-fluid">
        <div class = "products-case products__all container">
          <h3 class = " products__popular-title">
            Товары
          </h3>
          <List />
          <List />
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/Product_List.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>
