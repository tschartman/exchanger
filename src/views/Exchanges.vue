<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="exchange in supportedExchanges"
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
import EXCHANGES from '../graphql/Exchanges.gql';
export default {
  name: 'Exchanges',
  components: {
    ExchangeCard
  },
  data: () => ({
  }),
  apollo: {
    supportedExchanges: EXCHANGES
  }
}
</script>
