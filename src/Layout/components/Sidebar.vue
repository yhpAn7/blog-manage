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
    .scrollbar-container {
        height: calc(100vh - 110px);
        ::-webkit-scrollbar {
            display: none;
        }
    }
    .menu-container{
        border: none;
    }
}
</style>