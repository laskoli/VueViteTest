import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from "../constants"
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

/**
 * 判断当前是否为移动设备， 判断依据是屏幕宽度是否小于一个批定宽度（1280—）
 */
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})