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
        strong.navbar-text.navbar-right Balance: ${{ balance }}
        ul.nav.navbar-nav.navbar-right
          li.nav-link
            a(href='#') End Day
          li.dropdown
            a.dropdown-toggle(href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false") Save &amp; Load 
              span.caret
            ul.dropdown-menu
              li
                a(href='#') Save Data
              li
                a(href='#') Load Data
</template>

<script>
  export default {
    data () {
      return {
        showDropdown: false
      }
    },
    computed: {
      balance() {
        return this.$store.getters.money
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
