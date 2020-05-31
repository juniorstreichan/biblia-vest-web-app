import axios from 'axios';
import AuthStorage from '../storage/AuthStorage';
import { isExpired } from '../tools/functions';
import history from '../../routes/history';

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

      // console.log('payload', payload);
      const exp = isExpired(payload.exp);
      console.log('isExpired', exp);
      if (exp) {
        AuthStorage.clear();
        history.replace('/login');
      }
    }
    return newConfig;
  },
  err => Promise.reject(err),
);

export default apiAxios;
