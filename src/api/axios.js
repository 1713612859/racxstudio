import axios from 'axios';
import { toast } from 'react-toastify';

// 防止重复 Toast
let lastError = '';
let lastErrorTime = 0;
const ERROR_DEBOUNCE_TIME = 2000;
const TOAST_OPTIONS = {
  position: 'top-center',
  timeout: ERROR_DEBOUNCE_TIME,
  autoClose: ERROR_DEBOUNCE_TIME,

};

function showToastOnce(message, type = 'error', ...options) {
  const now = Date.now();
  if (message !== lastError || now - lastErrorTime > ERROR_DEBOUNCE_TIME) {
    lastError = message;
    lastErrorTime = now;
    toast[type](message, options);
  }
}

const api = axios.create({
  baseURL: 'http://192.168.110.6:8080',
  timeout: 10000,
});

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    if (response.data.code && response.data.code !== 200) {
      showToastOnce(response.data.message || '接口返回错误', TOAST_OPTIONS);
      // ❗直接返回一个“空结果”，而不是抛错
      return null;
    }
    return response.data;
  },
  (error) => {
    let msg = 'Network error';
    if (error.response) {
      switch (error.response.status) {
        case 400:
          msg = error.response.data?.message || 'Request param';
          break;
        case 401:
          msg = '未授权，请登录';
          break;
        case 403:
          msg = '没有权限访问该资源';
          break;
        case 404:
          msg = '接口不存在';
          break;
        case 500:
          msg = '服务器错误';
          break;
        default:
          msg = `请求错误：${error.response.status}`;
      }
    }
    showToastOnce(msg, error.response?.status === 401 ? 'warn' : 'error', TOAST_OPTIONS);
    // ❗不再抛错，直接返回一个安全值
    return null;
  },
);

export default api;
