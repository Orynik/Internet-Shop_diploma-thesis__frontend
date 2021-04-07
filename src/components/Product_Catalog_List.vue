<template>
    <ul class = "products-list row justify-content-between">
        <li class="product-item col-3" v-for = "(item,index) in raw" :key = "index">
            <img  class = "img-thumbnail product-item__img" :src="item.LintToImage" alt="">
            <div class="product-item__info">
                <router-link :to = "{name: 'Product',params: {id: item.id}}" class = "catalog-product__item-title">
                    {{item.Name}}
                </router-link>
                <span class = "product__price">{{item.Price}} Руб.</span>
                <button class = "catalog-product__item-button button__buy button" @click = "send(item)">
                    Купить
                </button>
            </div>
        </li>
    </ul>
</template>
<script>
import api from "@/api/index.js"
export default {
    data(){
        return {
            raw: {}
        }
    },
    mounted(){
        api.getProducts().then(
            (res) => {
                // TODO: Пофиксить костыль с удалением последнего элемента
                // Сделать разные компоненты для вывода всего списка и вывода популярных
                this.raw = res.data;
            }
        )
    },
    methods: {
        send(item){
            api.postCart(item).then(
                (res) => {
                    console.dir(res)
                },
                (err) => {
                    alert(`Произошли технические недолапки: ${err}`)
                }
            )
        }
    }
}
</script>
