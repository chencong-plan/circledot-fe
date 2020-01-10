import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/prism.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'

import '@/assets/css/github-markdown.min.css'

Vue.config.productionTip = false

Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
