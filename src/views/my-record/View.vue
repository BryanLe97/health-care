<script setup lang="ts">
import HCLineChart from '../../components/global/HCChart.vue'
import HexRecord from './component/HexRecord.vue';
import MyExercise from './component/MyExercise.vue';
import MyDiary from './component/MyDiary.vue';

</script>

<template>
  <div class="my-record">
    <div class="my-record__hex-record">
      <hex-record />
    </div>
    <div class="my-record__chart-record container">
      <h-c-line-chart />
    </div>
    <div class="my-record__my-exercise">
      <my-exercise />
    </div>
    <div class="my-record__my-diary">
      <my-diary />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-record{
  &__hex-record,
  &__chart-record{
    margin-bottom: 12px;
  }
  &__chart-record{
    ::v-deep {
      #myChart{
        width: 100% !important;
      }
    }
  }
}
</style>
