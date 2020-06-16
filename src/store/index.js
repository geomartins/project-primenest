import Vue from "vue";
import Vuex from "vuex";
import application from "./application.js";
import contact from "./contact.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    application,
    contact
  }
});
