import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'
import Home from '@/components/Home/Home'

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
    }
  ]
})
