import { ref } from 'vue'
<script setup lang="ts">
import { ref } from 'vue'
import router  from '../../../router/router'

interface Column {
  src: string;
  label: string;
  name: string;
}
const column = ref<Column[]>([
    {
        src: 'src/views/column-page/assets/column-1.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-2.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-3.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-4.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-5.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-6.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-7.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    },
    {
        src: 'src/views/column-page/assets/column-8.jpg',
        label: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…s',
        name: '#魚料理  #和食  #DHA',
    }
])
</script>

<template>
    <div class="column-page container">
        <div class="column-page__hex">
            <div class="flex">
                <div class="column-page__items">
                    <div>
                        <p class="column-page__items--yellow">RECOMMENDED COLUMN</p>
                        <hr />
                        <p>オススメ</p>
                    </div>
                </div>
                <div class="column-page__items">
                    <div>
                        <p class="column-page__items--yellow">RECOMMENDED DIET</p>
                        <hr />
                        <p>ダイエット</p>
                    </div>
                </div>
                <div class="column-page__items">
                    <div>
                        <p class="column-page__items--yellow">RECOMMENDED BEAUTY</p>
                        <hr />
                        <p>美容</p>
                    </div>
                </div>
                <div class="column-page__items">
                    <div>
                        <p class="column-page__items--yellow">RECOMMENDED HEALTH</p>
                        <hr />
                        <p>健康</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column-page__list">
          <div class="flex">
            <div v-for="col in column" class="column-page__list-items">
                <div class="img">
                  <img :src="col.src" />
                </div>
                <p class="none-mr-p">{{col.label}}</p>
                <p class="column-page__list-items--yellow none-mr-p">{{col.name}}</p>
              </div>
          </div>
        </div>
        <button @click="router.push({ name: 'top-page' })">コラムをもっと見る</button>
    </div>
</template>
<style lang="scss" scoped>
.column-page {
   &__hex{
      margin-bottom: 32px;
      & > div {
        flex-wrap: nowrap;
        justify-content: space-between;
      }
   }
   &__items {
    width: 20%;
    background: rgba(46, 46, 46, 1);
    padding: 24px 12px;
    &--yellow {
      color: #FFCC21;
    }
    hr {
      width: 20%;
    }
   }
   &__list {
      & > div {
        flex-wrap: wrap;
        justify-content: space-between;
      }
   }
   &__list-items {
       width: 22%;
       p{
        color: #414141;
       }
      .img{
        position: relative;
        display: block;
        padding-top: 60%;
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
      &--yellow{
        color: #FF963C !important;
        font-size: 12px;
        text-align: left;
      }
   }
}
</style>
