import request from "@/utils/request.js"

/**
 * 获取分类列表
 * @returns 
 */
export const getCategory = () => {
    return request({
        url: '/category'
    })
}