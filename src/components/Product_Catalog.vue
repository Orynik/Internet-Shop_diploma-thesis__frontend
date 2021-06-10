<template>
  <section class = "catalog row justify-content-between">
    <!--

          <aside class = "catalog-filter col-2">
      <form class = "filter-form">
        <fieldset class = "filter-form__serials d-flex flex-column">
          <legend>Серия:</legend>
          <span v-for="(item,index) in serials" :key = "index">
            <input type="checkbox" :name = "item.Serial" :id = "item.Serial">
            <label :for = "item.Serial">{{item.Serial}}</label>
          </span>
        </fieldset>
        <fieldset class = "filter-form__perfomance d-flex flex-column">
          <legend>КПД:</legend>
          <span>
            <input type = "number" min = "0">
          </span>
        </fieldset>
        <input class = "button button-search" type = "submit" value = "Найти">
      </form>
    </aside>

    -->
    <div class = "catalog-product__block col-12">
      <div class = "d-flex justify-content-between catalog-sorting">
        <h2 class = "catalog-sorting__title">Сортировать:</h2>
        <div class = "catalog-sorting d-flex justify-content-between flew-row">
          <ul class="catalog-sorting__list">
            <li class="catalog-sorting__item catalog-sorting__item--active"><a>По цене</a></li>
            <li class="catalog-sorting__item"><a href="#">По типу</a></li>
            <li class="catalog-sorting__item"><a href="#">По названию</a></li>
            <li><a class="catalog-sorting__item--down catalog-sorting__item--down-active"></a></li>
            <li><a class="catalog-sorting__item--up" href="#"></a></li>
          </ul>
        </div>
      </div>
      <list/>
    </div>
  </section>
</template>
<script>
import api from "@/api/AllRequestApi.js"
import list from "@/components/Product_Catalog_List"

export default {
  data(){
    return {
      raw: {},
    }
  },
  components:{
    list
  },
  mounted(){
    api.getProducts().then(
      (obj) => {this.raw = obj.data},
      (err) => alert("Произошла ошибка:" + err)
    )
  }
}
</script>