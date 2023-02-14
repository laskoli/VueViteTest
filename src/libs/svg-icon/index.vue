<template>
<svg aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClasss" :fill="color"/>
</svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    // 显示svg
    name: {
        type: String,
        required: true
    },
    // svg 图标颜色 
    color: {
        type: String
    },
    // tailwind 批定 svg 颜色类名
    fillClass: {
        type: String
    }
})

// 真实显示的 Svg 图标  (拼接 #icon-)
const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped>

</style>