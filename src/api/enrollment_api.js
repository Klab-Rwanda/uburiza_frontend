import api from './api_config';

export const getMyEnrollments = () => api.get('/enrollments/my');
export const enrollCourse = (courseId) => api.post('/enrollments', { courseId });
export const unenrollCourse = (courseId) => api.delete(`/enrollments/${courseId}`);
