<template>
    <div class="navbar-container">
        <div class="left-section">
            <!-- 面包屑导航 -->
            <el-breadcrumb separator="/">
                <template #default>
                    <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path" >
                            <!-- <router-link :to="item.path"> -->
                            <span>{{ item.meta.title }}</span>
                            <!-- </router-link> -->
                        </el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="right-section">
            <div class="avatar-placeholder"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';

const route = useRoute();
const breadcrumbItems = computed(() => {
    const matched = route.matched.filter(item => item.meta && item.meta.title);
    return matched;
});

</script>

<style scoped>
.navbar-container {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
}

.left-section {
    display: flex;
    align-items: center;
}

/* .breadcrumb 样式可以移除或调整，因为 el-breadcrumb 自带样式 */

.right-section {
    display: flex;
    align-items: center;
}

.avatar-placeholder {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #409eff;
}
</style>