<template>
    <div class="page-container">
        <el-row :gutter=24>
            <el-col :span="6" v-for="(item, index) in models" :key="index">
                <el-card shadow="hover" class="card">
                    <template #header>
                        <div class="card-title">{{ item.label }}</div>
                    </template>
                    <div class="card-content">
                        <div class="content-item">{{ item.value }}</div>
                        <div class="tool">
                            <el-button :icon="Plus" />
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { overviews } from '../../mock/homeData'
import { ref } from 'vue'
    const models = ref([...overviews.list])
</script>

<style scoped lang="scss">
    .card {
        :deep(.el-card__header) {
            border: none;
        }
        .card-title {
            font-size: 14px;
            font-weight: 400;
        }

        .card-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            .content-item {
                font-size: 28px;
                font-weight: 600;
            }
        }
    }
</style>