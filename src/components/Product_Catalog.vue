<template>
  <section class = "catalog row justify-content-between">
    <div class = "catalog-product__block col-12">
      <div class = "d-flex justify-content-between catalog-sorting">
        <h2 class = "catalog-sorting__title">Сортировать:</h2>
        <div class = "catalog-sorting d-flex justify-content-between flew-row">
          <ul class="catalog-sorting__list">
            <li class="catalog-sorting__item" :class="{'catalog-sorting__item--active': isActivePrice}" @click="changeCurrentOption(0)"><a>По цене</a></li>
            <li class="catalog-sorting__item" :class="{'catalog-sorting__item--active': isActiveSerial}" @click="changeCurrentOption(1)"><a>По типу</a></li>
            <li class="catalog-sorting__item" :class="{'catalog-sorting__item--active': isActiveName}" @click="changeCurrentOption(2)"><a>По названию</a></li>
            <li><a class="catalog-sorting__item--down" :class="{'catalog-sorting__item--down-active': isActiveDownDirect}" @click="changeCurrentOptionDirect(1)"></a></li>
            <li><a class="catalog-sorting__item--up" :class="{'catalog-sorting__item--up-active': isActiveUpDirect}" @click="changeCurrentOptionDirect(0)"></a></li>
          </ul>
        </div>
      </div>
      <list v-bind:currentOption = "currentOption"
      v-bind:currentOptionDirect = "currentOptionDirect"/>
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
      options: ["Price","Serial","Name"],
      optionDirect: ["Up","Down"],
      currentOption: "Price",
      currentOptionDirect: "Up",

      isActivePrice: true,
      isActiveSerial: false,
      isActiveName: false,

      isActiveDownDirect: true,
      isActiveUpDirect: false,
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
  },
  methods:{
    changeCurrentOption(number){
      const field = this.options[number];
      this.currentOption = field;
      if(field === "Name"){
        this.isActiveName = true;
        this.isActiveSerial = false;
        this.isActivePrice = false;
      }
      else if(field === "Price"){
        this.isActiveName = false;
        this.isActiveSerial = false;
        this.isActivePrice = true;
      }
      else if(field === "Serial"){
        this.isActiveName = false;
        this.isActiveSerial = true;
        this.isActivePrice = false;
      }
    },
    changeCurrentOptionDirect(number){
      const field = this.optionDirect[number];
      this.currentOptionDirect = field;
      if(field === "Down"){
        this.isActiveDownDirect = true
        this.isActiveUpDirect = false
      }
      else if(field === "Up"){
        this.isActiveDownDirect = false
        this.isActiveUpDirect = true
      }
    },
  }
}
</script>