<script setup lang="ts">
</script>

<template>
    <div class="banner">
      <div class="flex">
        <div class="banner__main-photo">
          <img src="../asset/imgs/main_photo.png" alt="">
          <img class="banner__main-photo-text" src="../asset/imgs/main_photo_text.png" alt="">
        </div>
        <div class="banner__graphic" />
      </div>
    </div>
</template>
<style lang="scss" scoped>
.banner{
    background: rgba(46, 46, 46, 1);
    &__main-photo {
      flex: 0 0 auto;
      position: relative;
    }
    &__main-photo-text{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &__graphic{
      background-image: url('../asset/imgs/main_graph.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      flex: 1 1 auto;
      padding: 0 20px;
    }
  }
</style>
