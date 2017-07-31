// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
<<<<<<< HEAD
import store from './store'
import { Swipe, SwipeItem, Loadmore } from 'mint-ui'
=======
import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'

Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

import './assets/css/reset.scss'
>>>>>>> 6df806a15ac6a2b95c4f414ab51c5a44e2f36976

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
