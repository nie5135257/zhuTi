import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import home from '@/pages/home'
import detail from '@/pages/detail'
import zhuTi from '@/pages/zhuTi'
import font from '@/pages/font'
import music from '@/pages/music'
import my from '@/pages/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/zhuTi',
      name: 'zhuTi',
      component: zhuTi
    },
    {
      path: '/font',
      name: 'font',
      component: font
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
