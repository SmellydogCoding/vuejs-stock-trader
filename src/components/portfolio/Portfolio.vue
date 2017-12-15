<template lang="pug">
  div
    app-stock(v-for="stock in stocks" :stock="stock" :key="stock.id")
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';
  
  export default {
    computed: {
      ...mapGetters({ stocks: 'portfolio/portfolio' })
    },
    components: {
      appStock: Stock
    }
  }
</script>
