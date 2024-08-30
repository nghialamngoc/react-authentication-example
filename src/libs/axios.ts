import axiosBase from "axios";
import { refreshTokenApi } from "../api/auth";

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ?? "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Mảng để lưu trữ các yêu cầu đang chờ xử lý
let refreshSubscribers: ((token: string) => void)[] = [];

// Hàm để thêm các callbacks vào hàng đợi
const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

// Hàm để gọi tất cả các callbacks trong hàng đợi
const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

let isRefreshing = false;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((token: string) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            resolve(axios(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          return Promise.reject(error);
        }

        const { accessToken } = await refreshTokenApi(refreshToken);
        localStorage.setItem("accessToken", accessToken);
        axios.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
        onRefreshed(accessToken);
        return axios(originalRequest);
      } catch (refreshError) {
        // Xử lý khi refresh token thất bại (ví dụ: đăng xuất người dùng)
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
