import { AxiosResponse } from 'axios';
import UserLogin from '../../models/UserLogin';
import User from '../../models/User';
import apiAxios from './apiAxios';

type LoginResponse = {
  user: User;
  token: string;
};

const AuthService = {
  async doLogin(user: UserLogin): Promise<AxiosResponse<LoginResponse>> {
    return apiAxios.post('/auth', user);
  },
};

export default AuthService;
