import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [],
    detaillists: []
  },
  mutations: {
    addItem (state, value) {
      state.lists.push(value)
    },
    // 评论
    addDetail (state, value) {
      state.detaillists.push(value)
    },
    setIndex (state, value) {
      state.index = value
    }
  }

})
