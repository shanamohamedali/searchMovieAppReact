import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
 

  const login = (userToken) => {
    setToken(userToken);
  };
  const logout = () => {
    setToken("");
  };
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,token}}>
      {children}
    </AuthContext.Provider>
  );
};
