import Vue from '../../node_modules/vue/dist/vue.js'
import router from '../../node_modules/vue-router/dist/vue-router.min.js'

Vue.use(router)

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
                    path: '/b/c',
                    component: resolve => require(['../components/c.vue'], resolve)
                },
                {
                    path: '/b/d',
                    component: resolve => require(['../components/d.vue'], resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/a.vue'], resolve)
        }
    ]
})
