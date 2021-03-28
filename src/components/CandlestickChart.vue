<template>
    <ApolloQuery
      :query="require('../graphql/Candles.gql')"
      :variables="variables"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <trading-vue v-else-if="data" :data="{ohlcv: formatData(data.candles)}"></trading-vue>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
</template>
<script>

import TradingVue from 'trading-vue-js'

export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            variables: {
                exchange: "bittrex",
                baseSymbol: "ETH",
                quoteSymbol: "BTC",
                interval: "15m"
            },
        }
    },
    methods: {
        formatData(data) {
            return data.map(data => [parseInt(data.time), parseFloat(data.open), parseFloat(data.high), parseFloat(data.low), parseFloat(data.close), parseFloat(data.volume)])
        }
    }
}

</script>