<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="exchange in exchanges"
        :key="exchange.exchange"
      >
      <exchange-card
          :exchange="exchange"
      />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ExchangeCard from '@/components/ExchangeCard.vue'

export default {
  name: 'Exchanges',
  components: {
    ExchangeCard
  },
  data: () => ({
    exchanges: [
      {
        "bestCaseFee": "0.00015",
        "worstCaseFee": "0.001",
        "exchange": "binance",
        "icon": "https://assets.shrimpy.io/exchanges/binance.png"
      },
      {
        "bestCaseFee": "0.001",
        "worstCaseFee": "0.001",
        "exchange": "binanceus",
        "icon": "https://assets.shrimpy.io/exchanges/binanceus.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.0025",
        "exchange": "bittrex",
        "icon": "https://assets.shrimpy.io/exchanges/bittrex.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.0025",
        "exchange": "bittrexinternational",
        "icon": "https://assets.shrimpy.io/exchanges/bittrexinternational.png"
      },
      {
        "bestCaseFee": "0.000125",
        "worstCaseFee": "0.001",
        "exchange": "kucoin",
        "icon": "https://assets.shrimpy.io/exchanges/kucoin.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.003",
        "exchange": "coinbasepro",
        "icon": "https://assets.shrimpy.io/exchanges/coinbasepro.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.0025",
        "exchange": "poloniex",
        "icon": "https://assets.shrimpy.io/exchanges/poloniex.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.0026",
        "exchange": "kraken",
        "icon": "https://assets.shrimpy.io/exchanges/kraken.png"
      },
      {
        "bestCaseFee": "0.0005",
        "worstCaseFee": "0.001",
        "exchange": "bibox",
        "icon": "https://assets.shrimpy.io/exchanges/bibox.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.0035",
        "exchange": "gemini",
        "icon": "https://assets.shrimpy.io/exchanges/gemini.png"
      },
      {
        "bestCaseFee": "0.00015",
        "worstCaseFee": "0.002",
        "exchange": "huobiglobal",
        "icon": "https://assets.shrimpy.io/exchanges/huobiglobal.png"
      },
      {
        "bestCaseFee": "-0.001",
        "worstCaseFee": "0.002",
        "exchange": "hitbtc",
        "icon": "https://assets.shrimpy.io/exchanges/hitbtc.png"
      },
      {
        "bestCaseFee": "0.00015",
        "worstCaseFee": "0.002",
        "exchange": "bitmart",
        "icon": "https://assets.shrimpy.io/exchanges/bitmart.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.005",
        "exchange": "bitstamp",
        "icon": "https://assets.shrimpy.io/exchanges/bitstamp.png"
      },
      {
        "bestCaseFee": "-0.0001",
        "worstCaseFee": "0.0015",
        "exchange": "okex",
        "icon": "https://assets.shrimpy.io/exchanges/okex.png"
      },
      {
        "bestCaseFee": "0",
        "worstCaseFee": "0.002",
        "exchange": "bitfinex",
        "icon": "https://assets.shrimpy.io/exchanges/bitfinex.png"
      }
    ]
  }),
}
</script>
