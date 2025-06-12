import type { RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/index.vue'

const baseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        children: [
            {
                path: '/home',
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
                path: '/about',
                component: () => import('@/layout/index.vue'),
                name: 'aboutLayout',
                redirect: '/about/child',
                meta: {
                    title: '关于'
                },
                children: [
                    {
                        path: '/about/child',
                        component: () => import('@/views/about/index.vue'),
                        name: 'child',
                        meta: {
                            title: '关于子路由'
                        }
                    }
                ]
            }
        ]
    },
]

export default baseRoutes