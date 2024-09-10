import { createContext, useState, useEffect } from "react";

const USER_STRUCTURE = {
  id: parseInt(Math.random() * 1000),
  name: "",
  email: "",
  password: "",
  avatar: "",
};

export const UserContext = createContext({ userInfo: USER_STRUCTURE });

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(USER_STRUCTURE);
  const [isLogin, setIsLogin] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const localUserInfo = Object.keys(localStorage).filter(key => key.includes("userInfo"));
    if (localUserInfo.length > 0) {
      setUserList(localUserInfo.map(key => JSON.parse(localStorage.getItem(key))));
      console.log(userList);
      
    }
  }, []);

/*   useEffect(() => {
    userList.forEach((user) => {
      localStorage.setItem("userInfo" + user.id, JSON.stringify(user));
    })
    
  }, [userList]); */

  function saveUserInfo (newUserInfo) {
    setUserInfo(newUserInfo);
    localStorage.setItem("userInfo" + newUserInfo.id, JSON.stringify(newUserInfo));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        userList,
        saveUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};