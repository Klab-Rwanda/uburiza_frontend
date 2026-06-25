import api from './api_config';

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const verifyEmail = (data) => api.post('/auth/verify-email', data);
export const resendVerification = (data) => api.post('/auth/resend-verification', data);
export const logout = () => api.post('/auth/logout');
export const forgotPassword = (data) => api.post('/auth/forgot-password', data);
export const resetPassword = (data) => api.post('/auth/reset-password', data);
