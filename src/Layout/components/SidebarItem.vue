<template>
  <el-sub-menu v-if="route.children && route.children.length" :index="route.path">
    <template #title>
      <el-icon v-if="route.meta && route.meta.icon">
        <component :is="route.meta.icon" />
      </el-icon>
      <span>{{ route.meta?.title }}</span>
    </template>
    <SidebarItem v-for="item in route.children" :key="item.path" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <el-icon v-if="route.meta && route.meta.icon">
      <component :is="route.meta.icon" />
    </el-icon>
    <span>{{ route.meta?.title }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
const props = defineProps({
  route: {
    type: Object,
    required: true
  }
});
</script>

<style scoped></style>