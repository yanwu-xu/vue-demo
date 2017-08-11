/**
 * Created by Administrator on 2017/8/1.
 */
import Vue from 'vue'
import App from './app'
import "babel-polyfill"								//Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
import router from './router/router.js'
import VueResource from 'vue-resource'
import axios from 'axios'			//ajax插件
import VeeValidate, { Validator } from 'vee-validate'
import messagesZH from '../node_modules/vee-validate/dist/locale/zh_CN'

Validator.updateDictionary({
    zh_CN: {
        messagesZH
    }
})

const config = {
    errorBagName: 'errors',
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
}

Vue.use(VeeValidate)
Vue.use(VueResource)            //拦截器

import '../static/css/reset.css'
Vue.prototype.$axios = axios


//拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    console.log('拦截器')
            }
        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    })

//路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (document.cookie) {
            next()
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
