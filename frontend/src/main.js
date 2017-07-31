// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
<<<<<<< HEAD
import { Swipe, SwipeItem, Loadmore, Navbar, InfiniteScroll, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
=======
import { Swipe, SwipeItem, Loadmore, Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui'
>>>>>>> e4614516815b495ab007f19e3ff2830f77d196bd

Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

import './assets/css/reset.scss'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
