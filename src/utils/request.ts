import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建一个 axios 实例
const baseURL = import.meta.env.VITE_GLOB_API_URL
const instance = axios.create({
  baseURL,
  timeout: 50000, // 设置超时时间
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 在请求发送之前可以做一些处理，比如添加认证信息等
  return config;
}, (error: Error) => {
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response: AxiosResponse) => {
  // 在接收到响应数据后可以做一些处理
  return response.data;
}, (error: Error) => {
  return Promise.reject(error);
});

// 封装请求方法
export const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await instance(config);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('未知错误');
    }
  }
};
