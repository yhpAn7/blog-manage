<template>
    <div class="sidebar-container">
        <Logo />
        <el-scrollbar class="scrollbar-container">
            <el-menu class="menu-container" :default-active="currentPath" mode="vertical" :router="true">
                <template v-for="route in allRoutes" :key="route.path" :route="route">
                    <SidebarItem :route="route"> </SidebarItem>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import type { RouteRecordRaw } from 'vue-router';
// import baseRoutes from '../../router/baseRoutes';
// import { computed } from 'vue';
import Logo from './Logo.vue';
const route = useRoute();
const currentPath = route.path;
const router = useRouter();
// 获取所有 layout 下的一级子路由（即每个模块）
const routes = router.options.routes || [];

const filterRoutes = (routes:RouteRecordRaw[]) => {
    const result:RouteRecordRaw[] = [];
    routes.forEach(route => {
        if(route.meta?.hidden) return;
        if(route.children && route.children.length > 0){
            route.children = filterRoutes(route.children)
        }
        result.push(route)
    })
    return result;
};

// 过滤出所有可用的路由，即不需要隐藏的路由，如：login、404
const allRoutes = filterRoutes([...routes]);


</script>

<style scoped lang="scss">
.sidebar-container {
    height: calc(100vh - 16px);
    overflow: hidden;
    background-color: rgba(255, 125, 26, 0.08);
    .scrollbar-container {
        height: calc(100vh - 110px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
    .menu-container{
        border: none;
        background: transparent;
        padding: 8px 0;
        background: rgba(255, 125, 26, 0.08);
        :deep(.el-menu-item) {
            border-radius: 8px;
            margin: 4px 12px;
            color: var(--el-text-color-regular);
            font-size: 16px;
            transition: background 0.2s, color 0.2s;
            &:hover {
                background: rgba(255, 125, 26, 0.08);
                color: var(--el-color-primary);
            }
        }
        :deep(.el-menu-item.is-active) {
            background: rgba(255, 125, 26, 0.10);
            color: var(--el-color-primary);
            font-weight: bold;
            box-shadow: 0 2px 8px 0 rgba(255, 125, 26, 0.10);
            position: relative;
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                bottom: 8px;
                width: 4px;
                border-radius: 4px;
                background: var(--el-color-primary);
                transition: background 0.2s;
            }
        }
        :deep(.el-sub-menu__title) {
            border-radius: 8px;
            margin: 4px 12px;
            color: var(--el-text-color-regular);
            font-size: 16px;
            transition: background 0.2s, color 0.2s;
            &:hover {
                background: rgba(255, 125, 26, 0.08);
                color: var(--el-color-primary);
            }
        }
        :deep(.el-menu-item , .el-sub-menu__title) {
            min-height: 44px;
            display: flex;
            align-items: center;
        }
        :deep(.el-menu-item .el-icon, .el-sub-menu__title .el-icon) {
            margin-right: 10px;
            font-size: 18px;
        }
    }
}
</style>