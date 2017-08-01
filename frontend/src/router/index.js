import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'
import Home from '@/components/Home/Home'
import Shop from '@/components/Shop'
import Filter from '@/components/Filter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/shop/:id',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    }
  ]
})
