import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import close from '@/components/content/textDetail/childCompos/childCompos/Close'
Vue.prototype.$close=new Vue()


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
