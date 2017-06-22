import Vue from 'vue';
import router from 'vue-router';
Vue.use(router)

export default new router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/b/c',
            component: resolve => require(['../components/page/b.vue'], resolve),   //实现按需加载
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/c.vue'], resolve)
                },
                {
                    path: '/b/d',
                    component: resolve => require(['../components/page/d.vue'], resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/a.vue'], resolve)
        }
    ]
})