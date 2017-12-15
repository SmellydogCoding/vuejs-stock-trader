<template lang="pug">
  div
    h1 Trade or View your Portfolio
    h6 you may Save & Load your Data
    h6 Click on 'End Day to begin a New Day!
    hr
    p Your Balance: {{ balance | money }}
</template>

<script>
  export default {
    computed: {
      balance() {
        return this.$store.getters['portfolio/money'];
      }
    }
  }
</script>
