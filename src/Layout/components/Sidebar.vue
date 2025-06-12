<template>
    <div class="sidebar-container">
        <Logo />
        <el-scrollbar class="scrollbar-container">
            <el-menu class="menu-container" :default-active="currentPath" mode="vertical" :router="true">
                <template v-for="route in routes" :key="route.path" :route="route">
                    <SidebarItem :route="route"> </SidebarItem>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SidebarItem from './SidebarItem.vue';
import baseRoutes from '../../router/baseRoutes';
import Logo from './Logo.vue';
const route = useRoute();
const currentPath = route.path;
console.log(currentPath);
const routes = baseRoutes[0].children;

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