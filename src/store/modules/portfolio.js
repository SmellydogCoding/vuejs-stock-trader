import axios from 'axios';

const state = {
  money: 10000,
  stocks: [],
  save: { success: false, failure: false },
  load: { success: false, failure: false }
}

const mutations = {
  'buy'(state, {id, name, quantity, price}) {
    const inPortfolio = state.stocks.find(stock => stock.id == id);
    if (inPortfolio) { inPortfolio.quantity += quantity }
      else { state.stocks.push({ id, name, quantity, price }); }
    state.money -= price * quantity;
  },
  'sell'(state, { id, quantity, price }) {
    const inPortfolio = state.stocks.find(stock => stock.id == id);
    if (inPortfolio.quantity > quantity) { inPortfolio.quantity -= quantity }
      else { state.stocks.splice(state.stocks.indexOf(inPortfolio), 1) }
    state.money += price * quantity;
  },
  'loadPortfolio' (state, data) {
    state.money = data.money;
    state.stocks = data.portfolio;
  },
  'saveStatus'(state,status) {
    console.log(status);
    if (status === 200) { state.save.success = true; }
    else { state.failure.success = true; }
  },
  'loadStatus'(state,status) {
    if (status === 200) { state.save.success = true; }
    else { state.failure.success = true; }
  },
  'resetStatus'(state) {
    state.save = { success: false, failure: false }
    state.load = { success: false, failure: false }
  }
}

const actions = {
  sell({commit}, purchase) {
    commit('sell', purchase)
  },
  save({commit}, data) {
    axios.put('/data.json',data).then((res) => {
      commit('saveStatus', res.status);
    });
  },
  load({commit}) {
    axios.get('/data.json').then((res) => {
      commit('loadPortfolio', res.data);
      commit('stocks/loadStocks', res.data, {root: true});
      commit('loadStatus', res.status);
    });
  },
  resetStatus({commit}) {
    commit('resetStatus');
  }
}

const getters = {
  portfolio (state) {
    return state.stocks
  },
  money (state) {
    return state.money;
  },
  saveStatus (state) {
    return state.save
  },
  loadStatus (state) {
    return state.load
  }
}

export default { namespaced: true, state, mutations, actions, getters };