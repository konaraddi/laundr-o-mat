import Vue from 'vue'
import Router from 'vue-router'
import StoreFront from '@/components/StoreFront'
import Laundromat from '@/components/Laundromat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StoreFront',
      component: StoreFront
    },
    {
      path: '/laundromat',
      name: 'Laundromat',
      component: Laundromat
    }
  ]
})
