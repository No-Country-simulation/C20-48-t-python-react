import { createContext, useState, useEffect } from "react";

const USER_STRUCTURE = {
  id: parseInt(Math.random() * 1000),
  name: "",
  email: "",
  password: "",
  avatar: "",
  favorites: [],
};

export const UserContext = createContext({ userInfo: USER_STRUCTURE });

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(USER_STRUCTURE);
  const [isLogin, setIsLogin] = useState(false);
  const [userList, setUserList] = useState(() => {
    const localUserInfo = Object.keys(localStorage).filter((key) =>
      key.includes("userInfo")
    );
    return localUserInfo.length > 0
      ? localUserInfo.map((key) => JSON.parse(localStorage.getItem(key)))
      : [];
  });


  useEffect(() => {
    const localUserInfo = Object.keys(localStorage).filter((key) =>
      key.includes("userInfo"),
    );
    if (localUserInfo.length > 0) {
      setUserList(
        localUserInfo.map((key) => JSON.parse(localStorage.getItem(key))),
      );
      console.log(userList);
    }
  }, []);
  
/*   useEffect(() => {
    if (userInfo.id) {
      const existingUserIndex = userList.findIndex((user) => user.id === userInfo.id);
      if (existingUserIndex !== -1) {
        const updatedUserList = [...userList];
        updatedUserList[existingUserIndex] = userInfo;
        setUserList(updatedUserList);
      } else {
        setUserList([...userList, userInfo]);
      }
    }
  }, [userInfo]); */

  function saveUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
    localStorage.setItem(
      "userInfo" + newUserInfo.id,
      JSON.stringify(newUserInfo),
    );
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        userList,
        setUserList,
        saveUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

