import Vue from 'vue'

import itemTop from '@/components/itemTop'
import price from '@/components/prc'
import btnPrc from '@/components/btnPrc'
import zhuTi from '@/components/zhuTi'
import font from '@/components/font'
import music from '@/components/music'
import footerImg from '@/components/footerImg'
import footerBox from '@/components/footerBox'
import footer from '@/components/footer'
import drag from '@/components/drag'
import text from '@/components/text'


let install = function(Vue, options) {
	Vue.component('my-item-top',itemTop)
	Vue.component('my-price',price)
	Vue.component('my-btn-price',btnPrc)
	Vue.component('my-zhuti',zhuTi)
	Vue.component('my-font',font)
	Vue.component('my-music',music)
	Vue.component('my-footerimg',footerImg)
	Vue.component('my-footer-box',footerBox)
	Vue.component('my-footer',footer)
	Vue.component('my-drag',drag)
	Vue.component('my-text',text)

	Vue.prototype.format = function(time) { //全局函数1
		time = new Date(time)
		return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
	}
	
	Vue.prototype.getZhuTi = function(size, current, obj = {}) {
		return this.$http.get('/zhuTi', {
			params: {
				size: size,
				current: current,
				obj: JSON.stringify(obj)
			}
		}).then(res=>{
			res.data.data.map(i => {
				i.time = this.format(i.time)
			})
			return res.data.data
		},err=>{})
	}
	
	Vue.prototype.getFont = function(size, current, obj = {}) {
		return this.$http.get('/font', {
			params: {
				size: size,
				current: current,
				obj: JSON.stringify(obj)
			}
		}).then(res=>{
			res.data.data.map(i => {
				i.time = this.format(i.time)
			})
			return res.data.data
		},err=>{})
	}
	
	Vue.prototype.getMusic = function(size, current, obj = {}) {
		return this.$http.get('/music', {
			params: {
				size: size,
				current: current,
				obj: JSON.stringify(obj)
			}
		}).then(res=>{
			res.data.data.map(i => {
				i.time = this.format(i.time)
			})
			return res.data.data
		},err=>{})
	}
	
}

export default install;