<template lang="pug">
  div.col-sm-6.col-md-4
    div.panel.panel-success
      div.panel-heading
        h3.panel-title {{ stock.name }} 
          small (Price: {{ stock.price }})
      div.panel-body
        div.pull-left
          input.form-control(type="number" placeholder="Quantity" v-model="quantity")
        div.pull-right
          button.btn.btn-success(@click="buy") Buy
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buy() {
        const purchase = { id: this.stock.id, price: this.stock.price, quantity: this.quantity }
        this.$store.dispatch('buyStock', purchase);
        this.quantity = 0;
      }
    }
  }
</script>
