import axios from "axios";
import md5 from 'js-md5';

export const getSecret = () => {
    const codetype = Number.parseInt(Date.now() / Math.pow(10, 3))
    const icode = md5(`$(codetype)LGD_Sunday-1991-12-30`)
    return { codetype, icode}
}

const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

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

export default service