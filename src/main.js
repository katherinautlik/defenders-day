import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Home from './components/Home.vue'
import Gift from './components/Gift.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/gift', component: Gift }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
