import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthContext = createContext(null);

const API_URL = process.env.REACT_APP_API_URL;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
    "roles",
  ]);

  const [user, setUser] = useState({
    username: "",
    roles: [],
  });

  const getCurrentUser = async () => {
    if (cookies.access_token) {
      const header = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies.access_token,
      };
      const url = `${API_URL}auth/user`;

      try {
        await axios
          .get(url, {
            headers: header,
          })
          .then((response) => {
            // set user data
            setUser({
              username: response.data.nome,
              roles: [...response.data.roles],
            });
          });
      } catch (error) {
        logout();
        console.log("Erro GetCurrentUser: " + error);
      }
    }
  };

  const login = async (code) => {
    // execute login and keeps the token on a cookie
    // access the api and send the code to ge the token
    const url = `${API_URL}auth/register?code=${code}`;

    await axios.get(url).then((response) => {
      if (response.data.access_token) {
        // set tokens on cookies
        setCookie("access_token", response.data.access_token, {
          path: "/",
        });
        setCookie("refresh_token", response.data.refresh_token, {
          path: "/",
        });
        setCookie("roles", response.data.roles, {
          path: "/",
        });

        // set user data
        setUser({
          username: response.data.nome,
          roles: [...response.data.roles],
        });
      }

      navigate(redirectPath, { replace: true });
    });
  };

  const logout = () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    removeCookie("roles");
  };

  const getToken = () => {
    return cookies.access_token;
  };

  return (
    <AuthContext.Provider
      value={{ user, getToken, login, logout, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
