<template>
  <ApolloQuery
  :query="require('../graphql/Tickers.gql')"
  :variables="{ exchange }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <v-data-table
          :headers="headers"
          :items="data.tickers"
          :items-per-page="10"
          class="elevation-1"
          :loading="loading"
      >
        <template v-slot:[`item.percentChange24hUsd`]="{item}">
          <div :class='getColor(item.percentChange24hUsd)'>
              {{ item.percentChange24hUsd }}
          </div>
        </template>
      </v-data-table>
    </template>
  </ApolloQuery>

</template>
<script>
  export default {
    props: {
        exchange: String
    },
    data: () => ({
      headers: [
          {
              text: 'Name',
              align: 'start',
              sortable: true,
              value: 'name'
          },
                      {
              text: 'Price USD',
              align: 'start',
              sortable: true,
              value: 'priceUsd'
          },
                      {
              text: '% Change 24hr',
              align: 'start',
              sortable: true,
              value: 'percentChange24hUsd'
          }
      ]
    }),
    methods: {
        getColor(percent) {
            if (percent > 1) return 'green'
            else if (percent < -1) return 'red'
            else return ''
        }
    }
  }
</script>
<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>