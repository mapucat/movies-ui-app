import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (import.meta.env.VITE_REACT_APP_API_READ_ACCESS_TOKEN) {
      config.headers.Authorization = `Bearer ${import.meta.env.VITE_REACT_APP_API_READ_ACCESS_TOKEN}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
