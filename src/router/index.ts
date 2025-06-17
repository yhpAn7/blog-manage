import { createRouter, createWebHashHistory  } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import baseRoutes from './baseRoutes'

const route: Array<RouteRecordRaw> = [
    {
        path:'/login',
        component:() => import('@/views/login/index.vue'),
        name:'login',
        meta:{
            title:'登录',
            hidden:true
        }
    },
    {
        path:'/404',
        component:() => import('@/views/error/404.vue'),
        name:'404',
        meta:{
            title:'404',
            hidden:true
        }
    },
    ...baseRoutes,
]

const routes = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes:route,
})

export default routes