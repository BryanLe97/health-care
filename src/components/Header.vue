<script setup lang="ts">
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/icons/logo.svg" alt="">
    </div>
    <div class="header__menu flex">
      <div class="flex">
        <img src="../assets/icons/menu-1.svg" alt="" class="header__menu__icon">
        <p class="header__menu__content">自分の記録</p>
      </div>
      <div class="flex">
        <img src="../assets/icons/menu-2.svg" alt="" class="header__menu__icon">
        <p class="header__menu__content">チャレンジ</p>
      </div>
      <div class="flex">
        <img src="../assets/icons/menu-3.svg" alt="" class="header__menu__icon active">
        <p class="header__menu__content">お知らせ</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.header {
  display: flex;
  background-color: rgba(65, 65, 65, 1);
  justify-content: space-around;
  &__logo {
    img {
      
    }
  }
  &__menu {
    div {
      margin-right: 8px;
    }
    &__icon{
      width: 32px;
      height: 32px;
      margin: 0 8px;
      &.active::after {
        content: '11111';
      }
    }
    &__content {
      margin-right: 16px;
    }
    &__icon,
    &__content {
      align-self: center;
    }
  }
}
</style>