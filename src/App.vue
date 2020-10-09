<template>
  <div id="app">
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
	        	<a href="#">About</a>
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
    </header>
      <router-link to="/about">About</router-link>
    <main>
      <router-view/>
    </main>
  </div> 
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
