<template>
  <v-container>
    <v-row style="height: 20vh">
      <v-col>
        <h1>{{exchange}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <candlestick-chart />
      </v-col>
      <v-col>
        <ticker-list :exchange="exchange" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CandlestickChart from '../components/CandlestickChart.vue'
import TickerList from '../components/TickerList.vue'
  export default {
  components: { TickerList, CandlestickChart },
    name: 'Exchange',
    props: {
      exchange: String
    },
    data: () => ({
    }),
  }
</script>
<style scoped>

</style>
