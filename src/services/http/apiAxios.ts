import axios from 'axios';
import AuthStorage from '../storage/AuthStorage';
import { isExpired } from '../tools/functions';

const apiAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiAxios.interceptors.request.use(
  reqConfig => {
    const newConfig = reqConfig;

    if (newConfig.url && !newConfig.url.includes('/auth')) {
      const token = AuthStorage.getToken();
      const payload: any = JSON.parse(atob(token?.split('.')[1] || ''));

      console.log('payload', payload);
      const exp = isExpired(payload.exp);
      console.log(exp);

      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  err => Promise.reject(err),
);

export default apiAxios;
