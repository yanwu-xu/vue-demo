import Vue from '../../node_modules/vue/dist/vue.js'
import VueRouter from '../../node_modules/vue-router/dist/vue-router.js'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/a',
            component: resolve => require(['../components/a.vue'], resolve),
            children:[
                {
                    path: '/b',
                    component: resolve => require(['../components/b.vue'], resolve)
                },
                {
                    path: '/c',
                    component: resolve => require(['../components/c.vue'], resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/a.vue'], resolve)
        }
    ]
})