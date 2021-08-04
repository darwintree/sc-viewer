import { createStore } from 'vuex'
import index from './assets/album-index.json'

const units = index['units']


// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      units,
      others: index['283_production']
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;
