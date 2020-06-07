import React from 'react';
import useAuth, { AuthState } from './hooks/useAuth';

export const AuthContext = React.createContext<AuthState>({} as AuthState);

const AuthProvider: React.FC = ({ children }) => {
  const { authenticated, handleLogin, handleLogout, loading, user } = useAuth();
  return (
    <AuthContext.Provider value={{ user, authenticated, handleLogin, handleLogout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
