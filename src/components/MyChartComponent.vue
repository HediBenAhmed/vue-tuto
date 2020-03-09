<template>
  <div class="container">
    <MyChart
      v-if="loaded"
      :chartdata="datacollection"
      :options="options"/>
  </div>
</template>

<script>
import MyChart from './MyChart';

export default {
  name: 'MyChartComponent',
  // eslint-disable-next-line vue/no-unused-components
  components: { MyChart },
  data() {
    return {
      loaded: false,
      datacollection: {
        // Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.datacollection.datasets = [
      {
        label: 'Data One',
        // Data to be represented on y-axis
        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 50],
        backgroundColor: this.randomColor(),
      },
      {
        label: 'Data Two',
        // Data to be represented on y-axis
        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 50],
        backgroundColor: this.randomColor(),
      },
    ];

    this.loaded = true;
  },
  methods: {
    randomColor() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgb(${r},${g},${b})`;
    },
  },
};
</script>
