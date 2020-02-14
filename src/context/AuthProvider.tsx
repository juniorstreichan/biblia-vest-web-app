import React, { useState, useCallback } from 'react';
import User from '../models/User';
import AuthStorage from '../services/storage/AuthStorage';

type AuthContextProps = {
  isAuth: boolean;
  user: User | null;
  setAuth: (auth: { user: User; token: string }) => void;
  clear: Function;
};

const initialContext: AuthContextProps = {
  isAuth: false,
  user: null,
  setAuth(a) {
    console.log('setAuth(a)');
  },
  clear() {
    console.log('clear()');
  },
};

export const AuthContext = React.createContext<AuthContextProps>(initialContext);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(AuthStorage.isAuth());
  const [user, setUser] = useState<User | null>(null);

  const setAuth = useCallback((auth: { user: User; token: string }) => {
    AuthStorage.setToken(auth.token);
    AuthStorage.setUser(auth.user);
    setIsAuth(AuthStorage.isAuth());
    setUser(auth.user);
  }, []);

  const clear = useCallback(() => {
    AuthStorage.clear();
    setIsAuth(AuthStorage.isAuth());
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setAuth, clear, isAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
