// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'lib-flexible'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'

import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:3000"
Vue.prototype.$http = axios
//Vue.prototype.pic= "http://127.0.0.1:3000/"

Vue.use(MintUI)
Vue.use(ElementUI)

import itemTop from '@/components/itemTop'
Vue.component('my-item-top',itemTop)

import price from '@/components/prc'
Vue.component('my-price',price)

import btnPrc from '@/components/btnPrc'
Vue.component('my-btn-price',btnPrc)

import zhuTi from '@/components/zhuTi'
Vue.component('my-zhuti',zhuTi)

import font from '@/components/font'
Vue.component('my-font',font)

import music from '@/components/music'
Vue.component('my-music',music)


import footerImg from '@/components/footerImg'
Vue.component('my-footerimg',footerImg)

import footerBox from '@/components/footerBox'
Vue.component('my-footer-box',footerBox)

import footer from '@/components/footer'
Vue.component('my-footer',footer)


import all from './all.js'
Vue.use(all)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
