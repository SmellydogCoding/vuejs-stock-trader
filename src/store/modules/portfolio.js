const state = {
  money: 10000,
  stocks: []
}

const mutations = {
  'buy'(state, {id, quantity, price}) {
    const inPortfolio = state.stocks.find(stock => stock.id == id);
    if (inPortfolio) { inPortfolio.quantity += quantity }
      else {state.stocks.push({ id, quantity }) }
    state.money -= price * quantity;
  },
  'sell'(state, { id, quantity, price }) {
    const inPortfolio = state.stocks.find(stock => stock.id == id);
    if (inPortfolio.quantity > quantity) { inPortfolio.quantity -= quantity }
      else { state.stocks.splice(state.stocks.indexOf(inPortfolio), 1) }
    state.money += price * quantity;
  }
}

const actions = {
  sell({commit}, purchase) {
    commit('sell', purchase)
  }
}

const getters = {
  portfolio (state, getters) {
    return state.stocks.map(stock => {
      const inPortfolio = getters.stocks.find(value => value.id == stock.id);
      return { id: stock.id, quantity: stock.quantity, name: inPortfolio.name, price: inPortfolio.price }
    });
  },
  money (state) {
    return state.money;
  }
}

export default { state, mutations, actions, getters };