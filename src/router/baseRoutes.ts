import type { RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/index.vue'

const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layoutHome',
        redirect: '/home/index',
        meta: {
            title: '首页管理'
        },
        children: [
            {
                path: '/home/index',
                component: () => import('@/views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/home/child',
                component: () => import('@/views/login/index.vue'),
                name: 'homeChild',
                meta: {
                    title: '子路由'
                }
            }
        ]
    },
    {
        path: '/article',
        component: () => import('@/layout/index.vue'),
        name: 'layoutArticle',
        meta: {
            title: '文章管理'
        },
        children: [
            {
                path: '/article/index',
                component: () => import('@/views/article/index.vue'),
                name: 'article',
                meta: {
                    title: '文章列表'
                }
            },
        ]
    }
]

export default baseRoutes