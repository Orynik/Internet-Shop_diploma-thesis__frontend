<template>
  <div>
    <header class = "header">
      <nav class = "header-nav d-flex container justify-content-between">
      <router-link to="/" class = "col-lg-3 header-nav__logo">Arvi theme</router-link>
        <ul class = "header-nav__list col-lg-4">
	        <li class = "header-nav__item">
	        	<a href="#">Категории</a>
	        	<ul class = "nav-menu__dropdown-list">
	        		<li class = "nav-menu__dropdown-item">
                <a href="#1">Bio</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#2">Photos</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#3">Social</a>
              </li>
	        	</ul>
	        </li>
	        <li class = "header-nav__item">
	        	<a href="#blog">Category</a>
	        	<ul class = "nav-menu__dropdown-list">
	        		<li class = "nav-menu__dropdown-item">
                <a href="#1">Bio</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#2">Photos</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#3">Social</a>
              </li>
	        	</ul>
	        </li>
	        <li class = "header-nav__item">
            <router-link to="/about">About</router-link>
	        	<ul class = "nav-menu__dropdown-list">
	        		<li class = "nav-menu__dropdown-item">
                <a href="#1">Bio</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#2">Photos</a>
              </li>
	        		<li class = "nav-menu__dropdown-item">
                <a href="#3">Social</a>
              </li>
	        	</ul>
	        </li>
        </ul>
        <ul class = "header-nav__list col-lg-2">
          <li class = "header-nav__item">
            <a class="fa fa-search" href = "#"></a>
          </li>
          <li class = "header-nav__item">
            <a class="fa fa-user" href = "#"></a>
          </li>
          <li class = "header-nav__item">
            <a class = "fa fa-shopping-basket" href = ""></a>
          </li>
        </ul>
      </nav>
      <hr class = "header-nav_delimetr">
      <Slider />
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
  data(){
    return{
    }
  }
}