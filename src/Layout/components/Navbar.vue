<template>
    <div class="navbar-container">
        <div class="left-section">
            <!-- 面包屑导航 -->
            <el-breadcrumb separator="/">
                <template #default>
                    <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.path">
                        <!-- <router-link :to="item.path"> -->
                        <span>{{ item.meta.title }}</span>
                        <!-- </router-link> -->
                    </el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="right-section">
            <div class="theme-template">
                <el-icon size="22px">
                    <Sunny  />
                </el-icon>
            </div>
            <div class="username">admin</div>
            <el-dropdown placement="bottom-end">
                <div class="avatar-placeholder"></div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>The Action 1st</el-dropdown-item>
                        <el-dropdown-item>The Action 2st</el-dropdown-item>
                        <el-dropdown-item>The Action 3st</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { Sunny } from '@element-plus/icons-vue'

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

    .username {
        margin-right: 10px;
        color: #333;
        font-size: 14px;
        font-weight: bold;
    }
}

.avatar-placeholder {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #409eff;
}


.theme-template {
    margin: 0 12px;
    cursor: pointer;
}
</style>