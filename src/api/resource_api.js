import api from './api_config';

export const listResources = (params) => api.get('/resources', { params });
export const createResource = (data) => {
  const form = new FormData();
  form.append('title', data.title);
  form.append('description', data.description ?? '');
  form.append('category', data.category);
  form.append('type', data.type);
  if (data.course_id) form.append('course_id', data.course_id);
  if (data.file) form.append('file', data.file);
  if (data.file_url) form.append('file_url', data.file_url);
  return api.post('/resources', form);
};
export const updateResource = ({ id, ...data }) => {
  const form = new FormData();
  if (data.title) form.append('title', data.title);
  if (data.description !== undefined) form.append('description', data.description);
  if (data.category) form.append('category', data.category);
  if (data.type) form.append('type', data.type);
  if (data.file) form.append('file', data.file);
  if (data.file_url) form.append('file_url', data.file_url);
  return api.put(`/resources/${id}`, form);
};
export const deleteResource = (id) => api.delete(`/resources/${id}`);
