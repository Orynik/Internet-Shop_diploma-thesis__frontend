<template>
	<div>
		<header class="header">
			<nav class="header-nav d-flex container-fluid justify-content-between">
				<ul class="header-nav__list col-lg-3 col-md-2">
					<li class="header-nav__item">
						<router-link to="/" class="header-nav__logo"
							>Электродвигатели</router-link
						>
					</li>
					<li class="header-nav__item">
						<router-link to="/catalog">Каталог</router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/about">О нас</router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/admin">Админ</router-link>
					</li>
				</ul>
				<ul class="header-nav__list col-lg-2">
					<li class="header-nav__item">
						<router-link
							to="/backet"
							class="fa fa-shopping-basket"
						></router-link>
					</li>
				</ul>
				<div class="header-nav__list col-lg-2" v-if="!isAuth">
					<li class="header-nav__item">
						<router-link to="/signup" class="fa fa-user-circle"></router-link>
					</li>
					<li class="header-nav__item">
						<router-link to="/signin" class="fa fa-sign-in"></router-link>
					</li>
				</div>
				<div v-else>
					<span>{{ getName }}</span>
					<i
						class="fa fa-sign-out sign-out"
						aria-hidden="true"
						@click="signOut"
					></i>
				</div>
			</nav>
		</header>
		<slot />
		<footer class="footer">Допустим footer</footer>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default{
  name: 'default-layout',
  methods: {
    ...mapGetters(["getAuthStatus","getUserName"]),
    ...mapActions(["auth","logout", "checkPermission"]),
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
  asyncComputed: {
    // TODO: Настроить отображение кнопки admin
    // isHavePermission: async function(){
    //   const isHaveAccess = this.checkPermission().then(
    //     (permissionStatus) => {
    //       if(permissionStatus){
    //         return true
    //       }else{
    //         return false
    //       }
    //     }
    //   )
    //   if(await isHaveAccess){
    //     return true
    //   }else{
    //     return false
    //   }
    // }
  }
}
</script>

<style scoped>
.sign-out {
	cursor: pointer;
}
</style>