<script setup lang="ts">
</script>

<template>
    <div class="hex-record flex container">
        <div class="hex-record__box">
            <img class="hex-record__img" src="../assets/MyRecommend-1.jpg">
            <div class="hex-record__text">
                <p class="hex-record__text--yellow">BODY RECORD</p>
                <p class="hex-record__text--bg-orange">自分のカラダの記録</p>
            </div>
        </div>
        <div class="hex-record__box">
            <img class="hex-record__img" src="../assets/MyRecommend-2.jpg">
            <div class="hex-record__text">
                <p class="hex-record__text--yellow">MY EXERCISE</p>
                <p class="hex-record__text--bg-orange">自分の運動の記録</p>
            </div>
        </div>
        <div class="hex-record__box">
            <img class="hex-record__img" src="../assets/MyRecommend-3.jpg">
            <div class="hex-record__text">
                <p class="hex-record__text--yellow">MY DIARY</p>
                <p class="hex-record__text--bg-orange">自分の日記</p>
            </div>
        </div>
  </div>
</template>
<style lang="scss" scoped>
.hex-record {
    justify-content: space-around;
    &__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        mix-blend-mode: luminosity;
        opacity: 0.25;
        &--img-1{
            background-image: url('../assets/MyRecommend-1.jpg');
        }
        &--img-2{
            background-image: url('../assets/MyRecommend-2.jpg');
        }
        &--img-3{
            background-image: url('../assets/MyRecommend-3.jpg');
        }
    }
    &__box {
        border: 24px solid #FFCC21;
        position: relative;
        width: 24%;
        display: block;
        padding-top: 24%;
    }
    &__text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 40%;
        &--yellow{
            color: #FFCC21;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 30px;
        }
        &--bg-orange{
            background-color: rgba(255, 150, 60, 1);
            margin: 0 15% !important;
        }
        p {
            margin: 0;
        }
    }
}
</style>
