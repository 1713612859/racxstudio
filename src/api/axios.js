import axios from 'axios';
import { toast } from 'react-toastify';

// Prevent duplicate toasts
let lastError = '';
let lastErrorTime = 0;
const ERROR_DEBOUNCE_TIME = 2000;
// export const BASE_URL = 'http://192.168.110.6:8080';
export const BASE_URL = 'http://localhost:8080';
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
  baseURL: BASE_URL,
  timeout: 10000,
});

// Response interceptor
api.interceptors.response.use(
  (response) => {
    if (response.data.code && response.data.code !== 200) {
      showToastOnce(response.data.message || 'API return error', TOAST_OPTIONS);
      // ❗Directly return an "empty result" instead of throwing an error
      return null;
    }
    return response.data;
  },
  (error) => {
    let msg = 'Network error';
    if (error.response) {
      switch (error.response.status) {
        case 400:
          msg = error.response.data?.message || 'Request parameter exception';
          break;
        case 401:
          msg = 'Unauthorized, please log in';
          break;
        case 403:
          msg = 'No permission to access this resource';
          break;
        case 404:
          msg = 'Interface does not exist';
          break;
        case 500:
          msg = 'Server error';
          break;
        default:
          msg = `Request error: ${error.response.status}`;
      }
    }
    showToastOnce(msg, error.response?.status === 401 ? 'warn' : 'error', TOAST_OPTIONS);
    // ❗No longer throw an error, directly return a safe value
    return null;
  },
);

export default api;
