import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: { //mutations are referenced by commit
    setResults(state, data) {
      state.results = data
    }
  },
  actions: { //actions are referenced by dispatch
    getMusicByArtist({ commit }, artist) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
      $.getJSON(url)
        .then(res => {
          console.log(res)
          commit('setResults', res.results)
        })
        .catch(err => console.log(err))
    }
  }
})
