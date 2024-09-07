import { createContext, useEffect, useState } from "react";

const USER_STRUCTURE = {
  id: parseInt(Math.random() * 1000),
  name: "juan",
  email: "",
  password: "",
  avatar: "",
};

export const UserContext = createContext(USER_STRUCTURE);
export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState(USER_STRUCTURE);

  
  function saveUserInfo (newUserInfo) {
    setUserInfo(newUserInfo);
    console.log(newUserInfo);
    
    localStorage.setItem('userInfo' + newUserInfo.id, JSON.stringify(newUserInfo));
  };
  useEffect(() => {
      saveUserInfo(userInfo);
  } , [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
