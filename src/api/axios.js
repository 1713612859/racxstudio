import axios from 'axios';
import { toast } from 'react-toastify';

const ERROR_DEBOUNCE_TIME = 2000;
let lastError = '';
let lastErrorTime = 0;

// export const BASE_URL = 'http://localhost:8080/api'; // 注意加上 http://
export const BASE_URL = '/api'; // 注意加上 http://

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10秒超时
});

function showToastOnce(message, type = 'error', options = {}) {
  const now = Date.now();
  if (message !== lastError || now - lastErrorTime > ERROR_DEBOUNCE_TIME) {
    lastError = message;
    lastErrorTime = now;
    toast[type](message, { ...options, autoClose: ERROR_DEBOUNCE_TIME });
  }
}

api.interceptors.response.use(
  (response) => {
    if (response.data.code && response.data.code !== 200) {
      showToastOnce(response.data.message || 'API error');
      return null;
    }
    return response.data;
  },
  (error) => {
    let msg = 'Network error';
    if (error.response) {
      switch (error.response.status) {
        case 400: msg = error.response.data?.message || 'Bad Request'; break;
        case 401: msg = 'Unauthorized'; break;
        case 403: msg = 'Forbidden'; break;
        case 404: msg = 'Not Found'; break;
        case 500: msg = 'Server Error'; break;
        default: msg = `Request error: ${error.response.status}`;
      }
    }
    showToastOnce(msg, error.response?.status === 401 ? 'warn' : 'error');
    return null;
  },
);

export default api;
