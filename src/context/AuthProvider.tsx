import React from 'react';
import useAuth, { AuthState } from './hooks/useAuth';

const INITIAL_CONTEXT: AuthState = {
  authenticated: false,
  handleLogin(user) {
    console.log(user);
  },
  handleLogout() {
    console.log('logout');
  },
  loading: false,
  user: null,
};

export const AuthContext = React.createContext<AuthState>(INITIAL_CONTEXT);

const AuthProvider: React.FC = ({ children }) => {
  const { authenticated, handleLogin, handleLogout, loading, user } = useAuth();
  return (
    <AuthContext.Provider value={{ user, authenticated, handleLogin, handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
