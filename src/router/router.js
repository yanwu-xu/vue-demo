/**
 * Created by Administrator on 2017/8/1.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/page/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve),
                    meta: {
                        //requireAuth: true
                    },
                },
                {
                    path: '/proDetail',
                    component: resolve => require(['../components/page/proDetail.vue'], resolve)
                },
                {
                    path: '/mine',
                    component: resolve => require(['../components/page/mine.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
