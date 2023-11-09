
import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUsername, setLoggedInUsername] = useState(() => {
    return localStorage.getItem('loggedInUsername') || '';
  });

  const login = (username) => {
    setLoggedInUsername(username);
    localStorage.setItem('loggedInUsername', username);
  };

  const logout = () => {
    setLoggedInUsername('');
    localStorage.removeItem('loggedInUsername');
  };

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUsername, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
