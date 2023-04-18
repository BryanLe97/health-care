<script setup lang="ts">
import { ref } from 'vue'
import HcDropdown from '../components/global/HCDropdown.vue'
const isNew = ref<number>(1)
</script>

<template>
  <div class="header container">
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
        <div style="position: relative;display: flex;">
          <img src="../assets/icons/menu-3.svg" alt="" class="header__menu__icon">
          <div class="header__menu__num-news" v-if="isNew > 0" > {{ isNew }} </div>
        </div>
        <p class="header__menu__content">お知らせ</p>
      </div>
      <div class="flex" style="align-self: center;">
        <hc-dropdown>
          <template #dropdown-toggle>
            <div class="header__menu__toggle" />
          </template>
          <template #dropdown-items class="dropdown__items">
            <a class="hc-ma-sm" href="#">自分の記録</a>
            <a class="hc-ma-sm" href="#">体重グラフ</a>
            <a class="hc-ma-sm" href="#">目標</a>
            <a class="hc-ma-sm" href="#">選択中のコース</a>
            <a class="hc-ma-sm" href="#">コラム一覧</a>
            <a class="hc-ma-sm" href="#">設定</a>
          </template>
        </hc-dropdown>
        
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hc-ma-sm {
  margin: 12px;
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
    & > div {
      margin-right: 8px;
    }
    &__icon{
      width: 32px;
      height: 32px;
      margin: 0 8px;
    }
    &__num-news{
      font-size: 10px;
      height: 16px;
      width: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: rgba(234, 108, 0, 1);
      transform: scale(1) translateY(17px) translateX(-19px);
    }
    &__content {
      margin-right: 16px;
    }
    &__icon,
    &__content {
      align-self: center;
    }
    &__toggle {
      height: 37px;
      width: 37px;
      background-image: url('../assets/icons/icon_menu.svg');
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 0.3s ease-in-out;
      transform: rotate(0deg);
      &:hover {
        transform: rotate(180deg);
        background-image: url('../assets/icons/icon_close.svg');
      }
    }
  }
}

</style>