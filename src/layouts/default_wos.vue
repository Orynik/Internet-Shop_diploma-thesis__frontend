<template>
  <div>
    <header class = "header">
      <nav class = "header-nav d-flex container-fluid justify-content-between">
        <ul class = "header-nav__list col-lg-3 col-md-2">
          <li class="header-nav__item">
            <router-link to="/" class = "header-nav__logo">Электродвигатели</router-link>
          </li>
          <li class = "header-nav__item">
            <router-link to="/catalog">Каталог</router-link>
	        </li>
           <li class = "header-nav__item">
            <router-link to="/about">О нас</router-link>
	        </li>
        </ul>
        <ul class = "header-nav__list col-lg-2">
          <li class = "header-nav__item">
            <router-link to="/backet" class = "fa fa-shopping-basket"></router-link>
          </li>
           <li class = "header-nav__item">
            <router-link to="/reg" class = "fa fa-user-circle"></router-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
    <footer class = "footer">
      Допустим footer
    </footer>
  </div>
</template>

<script>

export default{
  name: 'default-layout',

}