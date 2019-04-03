/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './modules'; // Using a babel plugin for this

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
});
