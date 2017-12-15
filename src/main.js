import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes' // name is in {} because it's a named import
import store from './store/store'
import axios from 'axios'

Vue.use(VueRouter);

axios.defaults.baseURL = 'https://vuejs-stock-trader-a8028.firebaseio.com/'

Vue.filter('money', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
