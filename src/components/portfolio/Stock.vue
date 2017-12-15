<template lang="pug">
  div.col-sm-6.col-md-4
    div.panel.panel-info(:class="{nssContainer: !canSell}")
      div.panel-heading
        h3.panel-title {{ stock.name }} 
          small (Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}}
      div.panel-body(:class="{nssContainer: !canSell}")
        div.pull-left
          input.form-control(type="number" min="0" placeholder="Quantity" v-model="quantity" :class="{nssInput: !canSell}")
        div.pull-right
          button.btn.btn-success(@click="sell" :disabled="!canSell || this.quantity < 1") Sell
        p.pull-left.nss-message(v-if="!canSell") Insufficient Stocks Available
</template>

<script>
  import {mapActions} from 'vuex';
  
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      canSell() {
        if (this.quantity === "") { return true } // this.quantity === "" if non-integers are typed in the input.  Don't want to show 'Insufficient' message, just disable sell button
        return parseInt(this.quantity) <= parseInt(this.stock.quantity)
      },
      balance() {
        return this.$store.getters['portfolio/money']
      }
    },
    methods: {
      ...mapActions({ placeOrder: 'portfolio/sell' }),
      sell() {
        const purchase = { id: this.stock.id, price: this.stock.price, quantity: this.quantity }
        this.placeOrder(purchase);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .nssContainer {
    margin-bottom: 0;
  }
  
  .nssContainer .panel-body {
    padding-bottom: 0;  
  }
  
  .nssInput {
    border: 1px solid firebrick;
    color: firebrick;
  }
  
  .nss-message {
    margin-bottom: 0;
    font-size: 1.15rem;
    color: firebrick;
  }
</style>
