import { envConfig } from '@/config/envConfig'
import { refreshToken } from '@/services/authService'
import axiosBase from 'axios'
import { CacheRequestConfig } from 'axios-cache-interceptor'

export type RequestConfig = CacheRequestConfig

const axios = axiosBase.create({
  baseURL: envConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Mảng để lưu trữ các yêu cầu đang chờ xử lý
let refreshSubscribers: ((token: string) => void)[] = []

// Hàm để thêm các callbacks vào hàng đợi
const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback)
}

// Hàm để gọi tất cả các callbacks trong hàng đợi
const onRefreshed = (token: string) => {
  refreshSubscribers.forEach(callback => callback(token))
  refreshSubscribers = []
}

let isRefreshing = false

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

axios.interceptors.response.use(
  response => response.data,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          addRefreshSubscriber((token: string) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token
            resolve(axios(originalRequest))
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const { success, data, message } = await refreshToken()
        if (success && data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken)
          axios.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
          onRefreshed(data.accessToken)
          return axios(originalRequest)
        }

        Promise.reject(message)
      } catch (refreshError) {
        // Xử lý khi refresh token thất bại (ví dụ: đăng xuất người dùng)
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  },
)

export default axios
