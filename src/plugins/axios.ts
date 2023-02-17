import axios from 'axios';

import { tokenState } from './ridge';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = tokenState.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

api.interceptors.response.use(undefined, (error) => {
  if (error.response.status === 401) {
    tokenState.reset();
  }
  return Promise.reject(error);
});

export { api };
