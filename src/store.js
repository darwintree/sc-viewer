import { createStore } from 'vuex'
import index from './assets/album-index.json'
import { urls, getIdolFullName } from './tools'
// import { getIdolFullName } from 

const units = index['units']


// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      units,
      others: index['283_production'],
      configBase: urls['configBase'],
      translationBase: urls['translationBase']
      // urls: {
      //   configBase: 'https://raw.githubusercontent.com/darwintree/sc-viewer-config/main',
      //   translationBase: "https://raw.githubusercontent.com/ShinyGroup/SCTranslationData/master/data/story"
      // }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    allCardsUrl: (state) => (idolName) => `${state.configBase}/idol/${getIdolFullName(idolName)}.json`,
    translatedUrl: (state) => (idolName) => `${state.configBase}/story/${getIdolFullName(idolName)}.json`
  }
})

export default store;
