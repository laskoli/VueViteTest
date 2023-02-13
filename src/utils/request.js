import axios from "axios";
import md5 from 'js-md5';

// console.log(import.meta.env.VITE_BASE_API);

export const getSecret = () => {
    const codetype = Number.parseInt(Date.now() / Math.pow(10, 3))
    const icode = md5(`$(codetype)LGD_Sunday-1991-12-30`)
    return { codetype, icode }
}

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})

/**
 * 请求拦截器：
 * 服务端请求之前
 */
service.interceptors.request.use(
    (config) => {
        const headers = config.headers || {}
        config.headers = {
            ...headers,
            ...getSecret(),
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截器：
 * 服务端返回数据之后， 前端 .then 之前
 */
service.interceptors.response.use(
    (response) => {
        const { success, message, data } = response.data
        if (success) {
            return data
        }
        // TODO: 业务请求错误
        return Promise.reject(new Error(message))
    }
)

export default service