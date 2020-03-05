import Vue from 'vue';
import Vuex from 'vuex';
import accountModule from './modules/AccountModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account: accountModule,
  },
});
