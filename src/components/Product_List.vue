<template>
	<ul class="products-list row justify-content-between">
		<li class="product-item col-3" v-for="(item,index) in raw" :key="index">
			<img class="img-thumbnail product-item__img" :src="item.LintToImage" alt="">
			<div class="product-item__info">
				<router-link :to="{name: 'Product',params: {id: item.id}}" class="catalog-product__item-title">
					{{ item.Name }}
				</router-link>
				<span class="product__price">{{ item.Price }} Руб.</span>
				<button class="catalog-product__item-button button__buy button" @click="send(item)">
					Купить
				</button>
			</div>
		</li>
	</ul>
</template>
<script>
import api from '@/api/AllRequestApi.js'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
			raw: {}
		}
	},
	mounted () {
		api.getProducts().then(
			(res) => {
				this.raw = res.data.slice(0, 4)
			}
		)
	},
	methods: {
		...mapActions(['addToCart']),
		...mapGetters(['getAuthStatus']),
		send (item) {
			if (this.getAuthStatus()) {
				const primaryInItem = {
					Name: item.Name,
					Serial: item.Serial
				}
				this.addToCart(primaryInItem).then(
					() => {
						this.$router.push('/backet')
					}
				)
			} else {
				alert('Вы неавторизованы, перед добавлением зайдите в аккаунт.')
			}
		}
	}
}
</script>
