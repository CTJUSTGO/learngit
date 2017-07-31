import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
