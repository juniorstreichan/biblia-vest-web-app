import { AxiosResponse } from 'axios';
import UserLogin from '../../models/UserLogin';
import User from '../../models/User';
import apiAxios from './apiAxios';

const AuthService = {
  async doLogin(user: UserLogin): Promise<AxiosResponse<User>> {
    return apiAxios.post('/auth', user);
  },
};

export default AuthService;
