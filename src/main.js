import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import md5 from './plugins/md5.js'

Vue.use(md5)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");