<template>

    <!-- 没有子菜单的情况 -->
    <el-menu-item :index="route.path" v-if="!route.children">
        <template #default>
            <el-icon :icon="route.meta.icon"></el-icon>
            <span>{{ route.meta.title }}</span>
        </template>
    </el-menu-item>


    <!-- 有子菜单的情况 -->
    <el-sub-menu :index="route.path" v-else>
        <template #title>
            <el-icon :icon="route.meta.icon"></el-icon>
            <span>{{ route.meta.title }}</span>
        </template>
        <SidebarItem v-for="item in route.children" :key="item.path" :route="item" />
    </el-sub-menu>
</template>

<script setup lang="ts">
defineProps({
    route: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>