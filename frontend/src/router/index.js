import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Find from '@/components/Find'
import Home from '@/components/Home/Home'
=======
import Hello from '@/components/Hello'
import Shop from '@/components/Shop'
>>>>>>> 6df806a15ac6a2b95c4f414ab51c5a44e2f36976

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
=======
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
>>>>>>> 6df806a15ac6a2b95c4f414ab51c5a44e2f36976
    }
  ]
})
