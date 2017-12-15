<template lang="pug">
  nav.navbar.navbar-default
    div.container-fluid
      div.navbar-header
        router-link(to='/' class="navbar-brand") Stock Trader
      div.collapse.navbar-collapse
        ul.nav.navbar-nav
          router-link(to='/portfolio' activeClass='active' tag='li' class="nav-link")
            a Portfolio
          router-link(to='/stocks'  activeClass='active' tag='li' class="nav-link")
            a Stocks
        strong.navbar-text.navbar-right Balance: {{ balance | money }}
        ul.nav.navbar-nav.navbar-right
          li
            a(href='#' @click="endOfDay") End Day
          li.dropdown(:class="{open: dropdownOpen}" @click="dropdownOpen = !dropdownOpen")
            a.dropdown-toggle(href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false") Save &amp; Load 
              span.caret
            ul.dropdown-menu
              li
                a(href='#' @click="save") Save Data
              li
                a(href='#' @click="load") Load Data
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    data () {
      return {
        dropdownOpen: false
      }
    },
    computed: {
      balance() {
        return this.$store.getters["portfolio/money"]
      }
    },
    methods: {
      ...mapActions({
        endDay: 'stocks/randomizePrices'
      }),
      endOfDay() {
        this.endDay();
      },
      save() {
        const data = {
          money: this.$store.getters['portfolio/money'],
          portfolio: this.$store.getters['portfolio/portfolio'],
          stocks: this.$store.getters['stocks/stocks']
        }
        this.$store.dispatch('portfolio/save', data);
      },
      load() {
        this.$store.dispatch('portfolio/load');
      }
    }
  }
</script>

<style>
  a:hover {
    text-decoration: none;
  }
  .dropdown-menu {
    left: -25px;
  }
</style>
