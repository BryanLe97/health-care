<script setup lang="ts">
</script>

<template>
    <div class="banner">
      <div class="flex">
        <img class="banner__main-photo" src="../../../src/assets/imgs/main_photo.png" alt="">
        <div class="banner__graphic" />
      </div>
    </div>
</template>
<style lang="scss" scoped>
.banner{
    background: rgba(46, 46, 46, 1);
    &__main-photo {
        flex: 0 0 auto;
    }
    &__graphic{
      background-image: url('../../src/assets/imgs/main_graph.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      flex: 1 1 auto;
      padding: 0 20px;
    }
  }
</style>
