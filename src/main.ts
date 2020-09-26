import Vue from 'vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue'

Vue.use(Buefy);

const routes = {
  '/': App
}
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
