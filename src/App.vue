<script setup lang="ts">
import FooterPage from './components/Footer.vue'
import HeaderPage from './components/Header.vue';
</script>

<template>
  <div class="layout">
		<div class="main">
      <div class="main-header"> 
        <header-page />
      </div>
      <div class="main-content"> 
        <router-view />
      </div>
      <div class="main-footer"> 
        <footer-page />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  .main{
    .main-header {
      background: #414141;
    }
  }
}
</style>
     