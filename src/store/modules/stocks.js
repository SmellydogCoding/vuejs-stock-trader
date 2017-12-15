import stocks from '../../mock/data'

const state = {
    stocks: []
};

const mutations = {
  'setStocks' (state, stocks) {
    state.stocks = stocks;
  },
  'randomPrice' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
  'loadStocks' (state, data) {
    state.stocks = data.stocks;
  }
};

const actions = {
  buyStock: ({ commit }, purchase) => {
    commit('portfolio/buy', purchase, {root: true});
  },
  initialStocks: ({ commit }) => {
    commit('setStocks', stocks);
  },
  randomizePrices: ({ commit }) => {
    commit('randomPrice');
  },
  loadStocks: ({ commit }, data) => {
    commit('loadStocks', data);
  }
};

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default { namespaced: true, state, mutations, actions, getters }