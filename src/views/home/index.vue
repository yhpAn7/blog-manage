<template>
    <div class="page-container">
        <el-row :gutter=24>
            <el-col :span="6" v-for="(item, index) in models" :key="index">
                <el-card shadow="always" class="card">
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

        <div class="main-container">
            <div class="main-lf">
                <el-row :gutter="24" style="margin-top: 20px;">
                    <el-col :span="24">
                        <el-card style="margin-right:10px;" shadow="always" :body-style="{ padding: '10px 20px' }">
                            <template #header>
                                <el-select v-model="lineValue" style="width: 220px;">
                                    <el-option label="近7天" :value="1"></el-option>
                                    <el-option label="近30天" :value="2"></el-option>
                                </el-select>
                            </template>
                            <div id="chatLine" style="width:640px; height: 400px; box-sizing: border-box;"></div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="24" style="margin-top: 20px;">
                    <el-col :span="24">
                        <el-card style="margin-right:10px;" shadow="always" :body-style="{ padding: '10px 20px' }">
                            <template #header>
                                <el-select v-model="lineValue" style="width: 220px;">
                                    <el-option label="近7天" :value="1"></el-option>
                                    <el-option label="近30天" :value="2"></el-option>
                                </el-select>
                            </template>
                            <div id="chatPie" style="width:640px; height: 400px; box-sizing: border-box;"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="main-rg">
                <el-row :gutter="24">
                    <el-col :span="24">
                        <el-card shadow="always" :body-style="{height:'940px'}">
                            <template #header>评论</template>
                            <div class="comment-list">
                                <div class="comment-item">
                                    <div class="avatar"></div>
                                    <div class="content">
                                        <div class="comment-user">评论人</div>
                                        <div class="comment-time">2020-02-21 18：40：05</div>
                                        <div class="comment-content">
                                            评论内容
                                        </div>
                                    </div>
                                </div>

                                <div class="comment-item">
                                    <div class="avatar"></div>
                                    <div class="content">
                                        <div class="comment-user">评论人</div>
                                        <div class="comment-time">2020-02-21 18：40：05</div>
                                        <div class="comment-content">
                                            评论内容
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { overviews } from '../../mock/homeData'
import { nextTick, onMounted } from 'vue';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
var optionLine: EChartsOption;
// 折线图
optionLine = {
    title: {
        text: '折线图'
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line', // 折线图
            smooth: true, // 平滑曲线
            showSymbol: false, // 折线图是否显示数据点
            lineStyle: {
                color: '#409eff' // 折线颜色
            },
            areaStyle: {} // 折线图填充颜色
        }
    ]
};


// 饼图
var optionPie: EChartsOption;
optionPie = {
    // backgroundColor: '#2c343c',

    title: {
        text: '数据来源',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'item'
    },


    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 274, name: 'Union Ads' },
                { value: 235, name: 'Video Ads' },
                { value: 400, name: 'Search Engine' }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                color: '#2c343c'
            },
            labelLine: {
                lineStyle: {
                    color: '#c23531'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};


import { ref } from 'vue'
const models = ref([...overviews.list])
const lineValue = ref(1)

onMounted(() => {
    // 基于准备好的dom，初始化echarts实例
    nextTick(() => {
        // 基于准备好的dom，初始化echarts实例 折线图
        var chartDom = document.getElementById('chatLine');
        var myChart = echarts.init(chartDom);
        optionLine && myChart.setOption(optionLine);


        var chartDomPie = document.getElementById('chatPie')!;
        var myChart = echarts.init(chartDomPie);
        optionPie && myChart.setOption(optionPie);
    })
})
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

.main-container {
    display: flex;
    align-items: start;
    height: 100%;

    .main-lf {
        width: 100%;
        height: 100%;
    }

    .main-rg {
        margin-top: 20px;
        width: 100%;
        height: 100%;

        .comment-list {
            .comment-item {
                display: flex;
                align-items: start;
                height: 100%;
                padding: 10px;
                .avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #ccc;
                    // margin-bottom: 10px;
                    margin-right: 16px;
                }

                .content {
                    flex: 1;
                    min-width: 0;
                    border-bottom: 1px solid #ccc;
                    .comment-user {
                        font-size: 14px;
                        font-weight: 500;
                        color: #1e1e1e;
                        margin-bottom: 5px;
                    }

                    .comment-time {
                        margin: 5px 0;
                        font-size: 12px;
                        font-weight: 400;
                        color: #999;
                    }

                    .comment-content {
                        font-size: 14px;
                        font-weight: 400;
                        color: #b1b1b1;
                        margin: 5px 0;
                        line-height: 1.5;
                        word-break: break-all;
                        // white-space: pre-wrap;
                        word-wrap: break-word;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
}
</style>