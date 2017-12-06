<template lang="pug">
  div.col-sm-6.col-md-4
    div.panel.panel-info
      div.panel-heading
        h3.panel-title {{ stock.name }} 
          small (Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}}
      div.panel-body
        div.pull-left
          input.form-control(type="number" placeholder="Quantity" v-model="quantity")
        div.pull-right
          button.btn.btn-success(@click="sell") Sell
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
    methods: {
      ...mapActions({ placeOrder: 'sell' }),
      sell() {
        const purchase = { id: this.stock.id, price: this.stock.price, quantity: this.quantity }
        this.placeOrder(purchase);
        this.quantity = 0;
      }
    }
  }
</script>