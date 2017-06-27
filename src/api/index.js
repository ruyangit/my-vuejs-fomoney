import axios from 'axios'
import qs from 'qs'
// import store from '../store'

import {
    baseUrl
} from './env'

axios.interceptors.request.use(config => {
    // store.dispatch('global/gProgress', 0)
    // store.dispatch('global/gMessage', 'destroy')
    // store.dispatch('global/gMessage', { type: 'loading', content: '正在加载中...', duration: 0 })
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    // store.dispatch('global/gProgress', 100)
    // store.dispatch('global/gMessage', 'destroy')
    if (response) {
        if (response.status === 200 || response.status === 304) {
            return response
        }
    } else {
        return {
            data: {
                code: 400,
                message: '服务器拒绝请求',
                data: ''
            }
        }
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: ''
        }
    }
}

function checkCode(res) {
    if (res.data.code) {
        //状态码全局处理器块
        if (res.data.code !== 200) {
            // store.dispatch('global/gMessage', { type: 'error', content: res.data.message, duration: 0, closable: true })
        }
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: baseUrl + url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: baseUrl + url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}
