/**
 * Created by Administrator on 2017/8/1.
 */
import Vue from 'vue'
import App from './app'
import "babel-polyfill"								//Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
import router from './router/router.js'
import Vuex from 'vuex'
import axios from 'axios'			//ajax插件
import VeeValidate, { Validator } from 'vee-validate'
import jquery from 'jquery'
import 'lib-flexible'
import '../static/css/reset.css'

Vue.prototype.$axios = axios        //全局绑定第三方库
Vue.prototype.$ = jquery


//自定义规则
const isMobile = {
    messages: {
        en:(field, args) => '必须是11位手机号码',
    },
    validate: (value, args) => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}
Validator.extend('mobile', isMobile)

//自定义内置规则的错误信息
const dictionary = {
    en: {
        messages: {
            required: (field) => '请输入' + field + '！',
            max: (field, args) => field + '不能超过' + args + '位',
            min: (field, args) => field + '不能少于' + args + '位'
        }
    }
}
Validator.updateDictionary(dictionary);

Vue.use(VeeValidate, {
    events: 'blur',     //失焦校验
    //delay: 500           //延迟
})

Vue.use(Vuex)


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

const store = new Vuex.Store({
    state: {
        phone: '18814884450'
    },
    mutations: {
        increment (state, n) {
            state.phone = n
        }
    },
    actions: {
        actionA ({ commit }, n) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment', n)
                    resolve()
                }, 3000)
            })
        },
        async actionB ({ dispatch, commit }, n) {
            await dispatch('actionA')
            commit('increment', n)
        },
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
