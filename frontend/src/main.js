// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import { Swipe, SwipeItem, Loadmore, Navbar, InfiniteScroll, TabItem, TabContainer, TabContainerItem, Header, Spinner } from 'mint-ui'

Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Spinner.name, Spinner)

import './assets/css/reset.scss'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Header.name, Header)
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
