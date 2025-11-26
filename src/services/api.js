import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://developerapis.vercel.app/api/blogs',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);

    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    return Promise.reject(error); // <-- error propagate karega
  }
);

/* ------------------------------
   CLEAN API WRAPPERS (NO TRY/CATCH)
--------------------------------- */

export const get = (url, config = {}) =>
  apiClient.get(url, config).then(res => res.data);

export const post = (url, data = {}, config = {}) =>
  apiClient.post(url, data, config).then(res => res.data);

export const put = (url, data = {}, config = {}) =>
  apiClient.put(url, data, config).then(res => res.data);

export const del = (url, config = {}) =>
  apiClient.delete(url, config).then(res => res.data);

export default apiClient;
