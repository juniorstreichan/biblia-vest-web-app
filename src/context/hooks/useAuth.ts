import { useState, useEffect } from 'react';
import UserLogin from '../../models/UserLogin';
import AuthStorage from '../../services/storage/AuthStorage';
import apiAxios from '../../services/http/apiAxios';
import history from '../../routes/history';
import User from '../../models/User';

export type AuthState = {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (user: UserLogin, redirectPath?: string) => void;
  handleLogout: Function;
  user: User | null;
};

export default function useAuth(): AuthState {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = AuthStorage.getToken();
    if (token) {
      apiAxios.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(userLogin: UserLogin, redirectPath = '/') {
    const { data } = await apiAxios.post('/auth', userLogin);
    AuthStorage.setToken(data.token);
    AuthStorage.setUser(data.user);
    apiAxios.defaults.headers.Authorization = `Bearer ${data.token}`;
    setUser(data.user);
    setAuthenticated(true);
    history.push(redirectPath);
  }

  function handleLogout() {
    setAuthenticated(false);
    AuthStorage.clear();
    apiAxios.defaults.headers.Authorization = undefined;
    history.push('/login');
  }

  return { user, authenticated, loading, handleLogin, handleLogout };
}
