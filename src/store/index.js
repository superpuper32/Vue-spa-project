import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navbarTitle: 'Vuex SINPAGAPP'
  },
  mutations: {
    changeTitle: (state, payload) => (state.navbarTitle = payload)
  }
})

export default store
