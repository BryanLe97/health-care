<script setup lang="ts">
import Banner from './component/Banner.vue'
import Hex from './component/Hex.vue'
import MealHistory from './component/MealHistory.vue'
</script>

<template>
  <div class="top-page">
    <div class="top-page__banner">
      <banner />
    </div>
    <div class="top-page__hex">
      <hex />
    </div>
    <div class="top-page__meal-his">
      <meal-history />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
