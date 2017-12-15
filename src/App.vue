<template lang="pug">
  div.container
    app-header
    div.row
      div.col-xs-12
        transition(name="slide" mode="out-in")
          router-view
    app-message
</template>

<script>
  import Header from './components/Header.vue';
  import Message from './components/Message.vue'
  
  export default {
    components: {
      appHeader: Header,
      appMessage: Message
    },
    created () {
      this.$store.dispatch('stocks/initialStocks')
    }
  }
</script>

<style lang="scss">
  body {
    padding: 1.0rem;
  }
  
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
