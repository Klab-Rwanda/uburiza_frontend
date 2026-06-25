import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://uburiza-backend.onrender.com/api",
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT from localStorage on every request (if present)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Unwrap response data; on 401 clear token and redirect to login
api.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
    const data = error.response?.data;
    // Zod validation errors come back as { issues: [...] }
    if (data?.issues) {
      const message = data.issues.map((i) => i.message).join(', ');
      return Promise.reject({ error: message });
    }
    return Promise.reject(data ?? error);
  }
);

export default api;
