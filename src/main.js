import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router:router,  =  앞뒤가 같으면 축약으로 하나만 아래처럼 적으면됨
  router,
  store,
}).$mount('#app')
