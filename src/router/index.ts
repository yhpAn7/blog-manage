import { createRouter, createWebHistory  } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import baseRoutes from './baseRoutes'

const route: Array<RouteRecordRaw> = [
    {
        path:'/login',
        component:() => import('@/views/login/index.vue'),
        name:'login',
        meta:{
            title:'登录'
        }
    },
    {
        path:'/404',
        component:() => import('@/views/error/404.vue'),
        name:'404',
        meta:{
            title:'404'
        }
    },
    ...baseRoutes,
]

const routes = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes:route,
})

export default routes