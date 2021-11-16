import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Food from '@/views/Food'
import Scenespots from '@/views/Scenespots'
import Traffic from '@/views/Traffic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/scenespots',
      name: 'Scenespots',
      component: Scenespots
    },
    {
      path: '/traffic',
      name: 'Traffic',
      component: Traffic
    }
  ]
})
