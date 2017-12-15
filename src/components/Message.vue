<template lang="pug">
  div.row
    div.col-sm-12
      div.alert.text-center(:class="{'alert-success': save.success, 'alert-warning': save.failure}")
        p(v-if="save.success") Success! Data Saved
        p(v-if="save.failure") Bummer! Something went wrong, data not saved
      div.alert.text-center(:class="{'alert-success': load.success, 'alert-warning': load.failure}")
        p(v-if="load.success") Success! Data Loaded
        p(v-if="load.failure") Bummer! Something went wrong, data not loaded
</template>

<script>
  export default {
    data() {
      return {
        save: {},
        load: {}
      }
    },
    computed: {
      saveStatus() {
        this.save = this.$store.getters['portfolio/saveStatus']
      },
      loadStatus() {
        this.load = this.$store.getters['portfolio/loadStatus']
      }
    },
    created () {
      this.$store.dispatch('portfolio/resetStatus')
    }
  }
</script>