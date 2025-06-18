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
            <div class="theme-template" @click="toggleTheme">
                <el-icon size="22px">
                    <Sunny />
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
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { Sunny } from '@element-plus/icons-vue'

const route = useRoute();
const breadcrumbItems = computed(() => {
    const matched = route.matched.filter(item => item.meta && item.meta.title);
    return matched;
});

const theme = ref<'light' | 'dark'>('light')
const isAnimating = ref(false)

function toggleTheme() {
    if (isAnimating.value) return;
    isAnimating.value = true;
    const body = document.body;
    body.classList.add('theme-transition');
    setTimeout(() => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        body.classList.toggle('dark-theme', theme.value === 'dark');
        body.classList.toggle('light-theme', theme.value === 'light');
        setTimeout(() => {
            body.classList.remove('theme-transition');
            isAnimating.value = false;
        }, 600);
    }, 10);
}

// 初始化主题
if (typeof window !== 'undefined') {
    document.body.classList.add('light-theme');
}
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
<style>
body.light-theme {
    --navbar-bg: #fff;
    --navbar-text: #333;
    --sidebar-bg: #f5f7fa;
    --sidebar-text: #333;
    --app-bg: #f5f7fa;
    background: var(--app-bg);
    color: var(--navbar-text);
}
body.dark-theme {
    --navbar-bg: #181c27;
    --navbar-text: #f6f6f6;
    --sidebar-bg: #23263a;
    --sidebar-text: #e0e0e0;
    --app-bg: #181c27;
    background: var(--app-bg);
    color: var(--navbar-text);
}
body.theme-transition {
    overflow: hidden;
    animation: theme-close-window 0.6s cubic-bezier(.77,0,.18,1) forwards;
}
@keyframes theme-close-window {
    0% {
        clip-path: inset(0 0 0 0);
    }
    100% {
        clip-path: inset(100% 0 0 0);
    }
}
</style>