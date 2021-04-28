import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

// API -> Dispatch -> Action -> context.commit -> Mutations -> State

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    asks: [],
    users: [],
    items: [],
    list:[],
  },
  getters: {
    fetchItemAsk(state) {
      return state.asks;
    },
    fetchedItem(state) {
      return state.items;
    },
  },
  mutations, // js를 따로 빼서 모듈화
  actions,
});
