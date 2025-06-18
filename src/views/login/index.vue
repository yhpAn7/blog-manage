<template>
    <div>
        <h1>登录 页面</h1>
        <el-input v-model="username" placeholder=""></el-input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('')

</script>

<style scoped>

</style>