<template>
  <div id="app">
    <component :is="layout">
      <router-view class = "main-section"/>
    </component>
  </div>
</template>


<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'layout-home'
    },
  }
}
</script>

<style>
 .main-section{
   min-height: 100vh;
 }
</style>