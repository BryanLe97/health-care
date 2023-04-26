<script setup lang="ts">
import { ref } from 'vue'
import router  from '../../../../router/router'

interface Meal {
  src: string;
}
const mealHistory = ref<Meal[]>([
    {
        src: 'src/views/top-page/asset/imgs/d01.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/d02.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/l01.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/l02.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/l03.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/m01.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/m02.jpg'
    },
    {
        src: 'src/views/top-page/asset/imgs/m03.jpg'
    }
])
</script>

<template>
    <div class="meal-his flex container">
        <div    
            v-for="arr in mealHistory" 
            :id="arr.src"
            class="meal-his__photo"
            
        >
            <img :src="arr.src" />
        </div>
        <button @click="router.push({ name: 'my-record' })" class="meal-his__btn">記録をもっと見るs</button>
    </div>
</template>
<style lang="scss" scoped>
.meal-his{
    flex-wrap: wrap;
    justify-content: center;
    &__photo{
        width: 23%;
        position: relative;
        display: block;
        padding-top: 23%;
        margin: 4px;
        img{
            // display: block; 
            // max-width: 100%; 
            // height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; 
        }
    }
}
</style>
