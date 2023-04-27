<script setup lang="ts">
import router  from '../../../../router/router'

</script>

<template>
    <div class="my-diary container">
        <div class="my-diary__label">
            <p>MY DIARY</p>
        </div>
        <div class="my-diary__list">
            <div class="flex">
                <div v-for="it in 8" class="my-diary__items">
                    <div>
                        <p class="none-mr-p">2021.05.21  </p>
                        <p>23:25</p>
                    </div>
                    <p>
                        私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…    
                    </p>
                </div>
            </div>
        </div>
        <button @click="router.push({ name: 'column-page' })">記録をもっと見るs</button>
    </div>
</template>
<style lang="scss" scoped>
.my-diary {
   p {
    color: #414141;
   }
   &__label {
    letter-spacing: 0.11px;
    font-size: 22px;
    text-align: left;
   } 
   &__list {
        & > div {
            flex-wrap: wrap;
        }
   }
   &__items{
        width: 20%;
        text-align: left;
        background: #FFFFFF;
        border: 1px solid #707070;
        margin: 12px;
        padding: 12px;
   }
}
</style>
