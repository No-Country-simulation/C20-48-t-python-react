import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  // ESTE SE USARIA LUEGO PARA HAER UPDATES DEL USER
  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("userInfo");
  //   const token = localStorage.getItem("token");
  //
  //   if (storedUserInfo && token) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //     setIsLogin(true);
  //   }
  // }, []);

  async function login(credenciales) {
    try {
      const response = await fetch("https://recetapp-ggh9.onrender.com/login", {
        method: "POST",
        body: JSON.stringify(credenciales),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...credenciales, userId: data.userId }),
        );
        setUserInfo({ ...credenciales, userId: data.userId });
        setIsLogin(true);
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
      console.log(data);
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
