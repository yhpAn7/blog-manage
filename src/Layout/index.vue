<template>
    <div class="layout-container">
        <el-container>
            <el-aside class="aside-container" width="320px">
                <Sidebar></Sidebar>
            </el-aside>
            <el-container>
                <el-header class="header-container">
                    <Navbar></Navbar>
                </el-header>
                <el-main class="main-container">
                        <AppMain></AppMain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
</script>

<style scoped lang="scss">
    .aside-container {
        border: none;
    }
    .header-container {
        border: none;
        padding: 0;
        box-shadow: 0px 1px 0px rgba(0, 21, 41, 0.08);
        height: 48px;
    }
    .main-container {
        border: none;
        background-color: rgba(245, 246, 249, 0.4);
    }
</style>