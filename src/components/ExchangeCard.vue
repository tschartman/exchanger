<template>
  <v-card
    width="300"
    height="150"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          v-text="exchange.exchange"
        ></v-card-title>
        <v-card-subtitle>
          {{exchange.bestCaseFee}} - {{exchange.worstCaseFee}}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            class="ml-2"
            outlined
            rounded
            small
            @click="routeToExchange(exchange.exchange)"
          >
            Details
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar
        class="ma-5"
        size="50"
        tile
      >
        <v-img :src="exchange.icon"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'ExchangeCard',
    props: {
      exchange: Object
    },
    data: () => ({
    }),
    methods: {
      routeToExchange(exchange) {
        this.$router.push({
          name: 'Exchange',
          params: {
            exchange
          }
        })
      }
    }
  }
</script>
<style scoped>
</style>
