import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'
import Home from '@/components/Home/Home'
import Shop from '@/components/Shop'
import Filter from '@/components/Filter'
import Order from '@/components/Order/Order'
import User from '@/components/User/User'
import Login from '@/components/Login/Login'
import Unlogin from '@/components/Unlogin/Unlogin'

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
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/unlogin',
      name: 'Unlogin',
      component: Unlogin
    }
  ]
})
