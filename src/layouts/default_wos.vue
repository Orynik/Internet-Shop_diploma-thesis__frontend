<template>
	<div>
		<header class="header">
			<nav class="d-flex container-fluid row">
				<ul class="header-nav__list align-items-center col-md-6 col-sm-8 display-block align-items-center">
					<li class="header-nav__item">
						<router-link to="/" class="header-nav__logo">
							Электродвигатели
						</router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/catalog">Каталог</router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/about">О нас</router-link>
					</li>
					<li class="header-nav__item" v-if = "isHavePermission">
						<router-link to="/admin">Админ</router-link>
					</li>
				</ul>
				<div class="header-nav__list header-nav__user ml-auto col-md-2 align-items-center" v-if="!isAuth">
					<li class="header-nav__item">
						<router-link
							to="/backet"
							class="fa fa-shopping-basket"
						></router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/signup" class="fa fa-user-circle"></router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/signin" class="fa fa-sign-in"></router-link>
					</li>
				</div>
				<div class="header-nav__list header-nav__user ml-auto col-md-2 align-items-center" v-else>
					<li class="header-nav__item">
						<router-link
							to="/backet"
							class="fa fa-shopping-basket"
						></router-link>
					</li>
					<span class = "username">{{ getName }}</span>
					<i
						class="fa fa-sign-out sign-out fa-2x"
						aria-hidden="true"
						@click="signOut"
						style = "color: white"
					></i>
				</div>
			</nav>
		</header>
		<slot />
		<footer class="footer">
			© 2021 - InternetShopDiploma -
			<router-link to="/about">О нас</router-link> -
			<a href = "https://github.com/Orynik">Разработчик</a>
		</footer>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default{
  name: 'default-layout',
  methods: {
    ...mapGetters(["getAuthStatus","getUserName"]),
    ...mapActions(["auth","logout", "checkPermission","getCart"]),
    signOut(){
      this.logout();
    }
  },
  computed:{
    isAuth(){
      this.auth();
      return this.getAuthStatus();
    },
    getName(){
      return this.getUserName();
    },
  },
	mounted(){
		this.getCart()
	},
  asyncComputed: {
    isHavePermission: async function(){
      const isHaveAccess = this.checkPermission().then(
        (permissionStatus) => {
          if(permissionStatus){
            return true
          }else{
            return false
          }
        }
      )
      if(await isHaveAccess){
        return true
      }else{
        return false
      }
    }
  }
}
</script>

<style scoped>
.sign-out {
	cursor: pointer;
}

.username{
	font-size: 15px;
	color: white;
}

.footer{
	color: white;
	background: #005184;
}

</style>