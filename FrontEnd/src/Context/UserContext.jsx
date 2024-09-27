import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "./AppDataContext";

export const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  );
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") !== null,
  );
  const { update, setUpdate } = useAppData();

  const navigate = useNavigate();

  async function login(credenciales) {
    try {
      const response = await fetch("https://recetapp-ggh9.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(credenciales),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const responseUser = await fetch(
        "https://recetapp-ggh9.onrender.com/user",
        { method: "GET", headers: { Authorization: `Bearer ${data.jwt}` } },
      );
      const userData = await responseUser.json();

      if (!response.ok || !responseUser.ok) {
        throw new Error("Failed to fetch data");
      }

      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userData, ...credenciales, userId: data.userId }),
        );
        setUserInfo({
          ...userData,
          username: credenciales.username,
          userId: data.userId,
        });
        setIsLogin(true);
        setUpdate(!update);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("userInfo");
    setIsLogin(false);
    setUserInfo(null);
    navigate("/login");
  }

  function changesUserInfo(updatedUserInfo) {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      ...updatedUserInfo,
    }));
  }

  async function register(newUserInfo) {
    try {
      const response = await fetch(
        "https://recetapp-ggh9.onrender.com/register",
        {
          method: "POST",
          body: JSON.stringify(newUserInfo),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  }
  return (
    <UserContext.Provider
      value={{
        userInfo,
        isLogin,
        setUserInfo,
        setIsLogin,
        login,
        logout,
        changesUserInfo,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
