<script setup lang="ts">
import HexRecord from './component/HexRecord.vue';
import HCLineChart from '../../components/global/HCLineChart.vue'
</script>

<template>
  <div class="my-record">
    <div class="my-record__hex-record">
      <hex-record />
    </div>
    <h-c-line-chart />
  </div>
</template>
<style lang="scss" scoped>
</style>
