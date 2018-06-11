import Vue from 'vue'
import Router from 'vue-router'

import HotShowing from '@/components/HotShowing/HotShowing'//热映

import seek from '@/components/seek/seek'

import me from '@/components/me/me'

import star from '@/components/publicModule/star'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HotShowing',
      component: HotShowing
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/star',
      name: 'star',
      component: star
    }
  ]
})
