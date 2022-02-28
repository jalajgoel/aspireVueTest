import Vue from 'vue'
import '@/plugins/vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@/stylesheets/global.css'
import '@/stylesheets/slick.css'
import '@/stylesheets/style.css'


import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from './plugins/vuetify'

// import '@/mixins'
// import '@/filters'
// import '@/components/shared'


Vue.config.productionTip = false

export default new Vue({
  router,

  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
