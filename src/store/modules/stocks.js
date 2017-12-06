import stocks from '../../mock/data'

const state = {
    stocks: []
};

const mutations = {
  'setStocks' (state, stocks) {
    state.stocks = stocks;
  },
  'randomPrice' (state) {
    
  }
};

const actions = {
  buyStock: ({ commit }, purchase) => {
    commit('buy', purchase);
  },
  initialStocks: ({ commit }) => {
    commit('setStocks', stocks);
  },
  randomizePrices: ({ commit }) => {
    commit('randomPrice');
  }
};

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default { state, mutations, actions, getters }