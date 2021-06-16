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
                {{currentOption}}
                {{currentOptionDirect}}
            </div>
        </li>
    </ul>
</template>
<script>
// import api from "@/api/AllRequestApi.js"
import {mapActions} from "vuex"
export default {
    data(){
        return {
            raw: {}
        }
    },
    props:["currentOption","currentOptionDirect"],
    mounted(){
        this.getProducts().then(
            (res) => {
                // TODO: Сделать watch на props, чтобы при изменени вызывался фильтр
                this.raw = res.data;
                this.raw.sort(this.byField(this.$props.currentOption,this.$props.currentOptionDirect));
            }
        )
    },
    methods: {
        ...mapActions(["addToCart","getProducts"]),
        send(item){
            const primaryInItem = {
                Name: item.Name,
                Serial: item.Serial
            }
            this.addToCart(primaryInItem).then(
                () => {
                    this.$router.push("/backet")
                },
                // (err) => {
                    // alert(`Произошли технические недолапки: ${err}`)
                // }
            )
        },
        byField(field,direction){
            return (a, b) => {
                if(direction === "Down"){
                    return a[field] > b[field] ? -1 : 1;
                    
                }else{
                    return a[field] > b[field] ? 1 : -1;
                }
            }
        }
    },
    watch:{
        currentOptionDirect(){
            this.raw.sort(this.byField(this.$props.currentOption,this.$props.currentOptionDirect));
        },
        currentOption(){
            this.raw.sort(this.byField(this.$props.currentOption,this.$props.currentOptionDirect));
        }
    }
}
</script>
