import React, { createContext, ReactNode, useContext, useEffect } from "react";
import useStateCallback from "../hooks/useStateCallback";
import { useLocation, useNavigate } from "react-router-dom";
import {notification} from 'antd';
import Cookies from "js-cookie";
import api from "../utils/api";
const authContextDefaultValues = {
  user: null,
  login: (data) => {},
  logout: () => {},
};
export const AuthContext = createContext(
  authContextDefaultValues
);

export function AuthProvider({ children }) {
  const [user, setUser] = useStateCallback(null);
  const navigate = useNavigate("");
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token=="" || token == undefined){
      if (location.pathname !== '/' && location.pathname !== '/signup')
        navigate('/');
    } else {      
      if (location.pathname == '/'){
        getUserData();
        navigate('/viewBlogs');
      }
        
    }
  }, [location]);
  
  const login = async (email, password) => {
    await api
      .post("auth/login", {
        username: email,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        
        Cookies.set("accessToken", data.data.accessToken, {
          expires: new Date(Date.now() + 9999999),
          httpOnly: false,
        });
        
        notification.success({ message: "Login Successful!" });
        navigate("/viewBlogs");
        getUserData()
      })
      .catch((err) => {
        console.log(err);
        
        notification.error({
          message: err.response.data?.message || "Invalid Credentials!",
        });
      });
  };

  const logout = () => {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: [],
      password: "",
      phoneNumber: "",
      status: "",
    });
    Cookies.remove("accessToken");
    navigate("/");
    
  };

  const getUserData = async ()=>{
     await api
      .get("/users/profile")
      .then(({ data }) => {
           
        notification.success({ message: "Login Successful!" });
        navigate("/viewBlogs");
        setUser(data.data.profile);
      })
      .catch((err) => {
        console.log(err);
      
      });
  }
  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default function useAuth() {
  return useContext(AuthContext);
}
