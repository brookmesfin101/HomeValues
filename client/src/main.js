import Vue from 'vue'
import App from './App.vue'
import '../public/bootstrap.min.css'
import Chart from '../src/scripts/Chart.bundle.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App, Chart),
}).$mount('#app')
