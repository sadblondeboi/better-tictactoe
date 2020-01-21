import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Game from './components/Game.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/game/', component: Game },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
