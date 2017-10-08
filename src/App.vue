<template lang="pug">
  div.container
    app-header
    div.row
      div.col-md-12
        router-view
</template>

<script>
  import Header from './components/Header.vue';
  
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
  body {
    padding: 1.0rem;
  }
</style>
