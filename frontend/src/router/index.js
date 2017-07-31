import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/Find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Find',
      component: Find
    }
  ]
})
