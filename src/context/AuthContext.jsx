import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { setLocalData, getLocalData, clearLocalData } =
    useLocalStorage("userToken");
  const [token, setToken] = useState(getLocalData());
  const navigate=useNavigate();
  

  const login = (Token) => {
    setLocalData(Token);
    setToken(getLocalData());
  };

  const logout = () => {
    clearLocalData("userToken");
    setToken(getLocalData());
    console.log("afterlogouttoken",token)
  };

  const isAuthenticated = !!token;
  console.log("tokenresAuth", isAuthenticated);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth=()=>{
  return useContext(AuthContext);
}
