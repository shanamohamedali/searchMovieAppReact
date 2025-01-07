import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const{ setLocalData,getLocalData,clearLocalData}=useLocalStorage("userData");
 

  const login = (userToken) => {
    setToken(userToken);
    setLocalData(userToken);
  };
  const logout = () => {
    clearLocalData("userData");
    setToken("");
    
  };
  const isAuthenticated = !!token || !!(getLocalData());
console.log("logout",getLocalData());
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,token}}>
      {children}
    </AuthContext.Provider>
  );
};
