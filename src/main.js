import Vue from 'vue';
import App from './App.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import router from './router';
import store from './store';
import './plugins/axios';
import './plugins/element';

Vue.config.productionTip = false;

Vue.component('default-layout', DefaultLayout);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
