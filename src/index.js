/**
 * Created by xudongdong-i on 2017/6/5.
 */
import Vue from '../node_modules/vue/dist/vue.js'
import Favlist from './components/Favlist.vue'
//import "babel-polyfill"								//Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
import router from './router/router.js'
//import axios from 'axios'			//ajax插件


//Vue.prototype.$axios = axios
new Vue({
	router,
	render: h => h(Favlist)
}).$mount('#app')
