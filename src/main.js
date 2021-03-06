// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

import "@/aside/demo.css";
import router from './router'


Vue.config.productionTip = false

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    friend: 'tech lover',
    num: 1,
  },
  mutations: {
    plus(state, val) {
      state.num = val;
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
