import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1050,
    lg: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
