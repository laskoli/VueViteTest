import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

/**
 * 判断当前是否为移动设备， 判断依据是屏幕宽度是否小于一个批定宽度（1280—）
 */
export const isMobileTerminal = computed(() => {
    return width.value < PC_DEVICE_WIDTH
})

/**
 *  动态指定 rem  基准值， 最大为 40px 
 *  根据用户屏幕宽度， 进行计算 ，把计算值赋值 html fontsize 大小
*/
export const useREM = () => {
    // 定义最大的 fontSize
    const MAX_FONT_SIZE = 40
    // 监听html 文档初解析完成的事件
    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html')
        // 根据屏幕宽度/ 10 
        let fontSize = window.innerWidth / 10 
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
        html.style.fontSize = fontSize + 'px'
    })
}
