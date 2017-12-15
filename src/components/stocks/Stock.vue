<template lang="pug">
  div.col-sm-6.col-md-4
    div.panel.panel-success(:class="{nsfContainer: nsf}")
      div.panel-heading
        h3.panel-title {{ stock.name }} 
          small (Price: {{ stock.price }})
      div.panel-body(:class="{nsfContainer: nsf}")
        div.pull-left
          input.form-control(type="number" min="0" placeholder="Quantity" v-model="quantity" :class="{nsfInput: nsf}")
        div.pull-right
          button.btn.btn-success(@click="buy" :disabled="nsf || this.quantity < 1") Buy
        p.pull-left.nsf-message(v-if="nsf") Insufficient Funds Available
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      nsf() {
        return this.quantity * this.stock.price > this.balance
      },
      balance() {
        return this.$store.getters['portfolio/money']
      }
    },
    methods: {
      buy() {
        const purchase = { id: this.stock.id, name: this.stock.name, price: this.stock.price, quantity: parseInt(this.quantity) }
        this.$store.dispatch('stocks/buyStock', purchase);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .nsfContainer {
    margin-bottom: 0;
  }
  
  .nsfContainer .panel-body {
    padding-bottom: 0;  
  }
  
  .nsfInput {
    border: 1px solid firebrick;
    color: firebrick;
  }
  
  .nsf-message {
    margin-bottom: 0;
    font-size: 1.15rem;
    color: firebrick;
  }
</style>
