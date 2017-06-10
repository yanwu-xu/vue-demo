import Vue from '../../node_modules/vue/dist/vue.js'
import router from '../../node_modules/vue-router/dist/vue-router.min'

Vue.use(router)
console.log(router)
export default new router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/b',
            component: resolve => require(['../components/b.vue'], resolve),
            children:[
                {
                    path: '/c',
                    component: resolve => require(['../components/c.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/a.vue'], resolve)
        }
    ]
})

console.log(33333)