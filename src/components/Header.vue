<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    router-link(to='/' class="navbar-brand") Stock Trader
    div.collapse.navbar-collapse
      ul.navbar-nav
        router-link(to='/portfolio' activeClass='active' tag='li' class="nav-link")
          a Portfolio
        router-link(to='/stocks'  activeClass='active' tag='li' class="nav-link")
          a Stocks
    div#navbarNavDropdown.collapse.navbar-collapse.justify-content-end
      ul.navbar-nav
        li.nav-link
          a(href='#') End Day
        li.nav-item.dropdown
          a#navbarDropdownMenuLink.nav-link.dropdown-toggle(href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="showDropdown = !showDropdown") Save &amp; Load
          div.dropdown-menu(aria-labelledby="navbarDropdownMenuLink" :class="{'d-block': showDropdown}")
            a.dropdown-item(href='#') Save Data
            a.dropdown-item(href='#') Load Data
</template>

<script>
  export default {
    data () {
      return {
        showDropdown: false
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
