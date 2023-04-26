<template>
    <canvas  height="312" id="myChart" ></canvas>
</template>
  
<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import Chart from 'chart.js/auto';
    
    let myChart: Chart<"line", number[], string>;
    onMounted(() => {
        const canvas = document.getElementById('myChart') as HTMLCanvasElement | null;
        if (!canvas) {
            throw new Error("Could not find canvas element with ID 'myChart'");
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error("Could not get 2d context for canvas element");
        }
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: ['6月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
            datasets: [
                {
                    data: [0, 10, 5, 2, 20, 24, 10, 30, 28 , 10, 20],
                    fill: false,
                    borderColor: 'rgba(255, 204, 33, 1)',
                    tension: 0.1,
                    backgroundColor: "rgba(255, 204, 33, 1)"
                },
                {
                    data: [5, 20, 10, 20, 10, 5, 10, 2, 20, 24, 10],
                    fill: false,
                    borderColor: 'rgba(143, 233, 208, 1)',
                    tension: 0.1,
                    backgroundColor: "rgba(143, 233, 208, 1)"
                }
            ]},
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    
                },
                backgroundColor: '#414141'
            }
        });
    });
</script>
<style>
#myChart {
  height: 312px !important;
  width: 100% !important;
  background-color: #414141;
}
</style>