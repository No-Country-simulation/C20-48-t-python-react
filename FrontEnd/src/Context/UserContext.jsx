import { createContext, useState } from "react";

const USER_STRUCTURE = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  
const UserContext = createContext(USER_STRUCTURE);

const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(USER_STRUCTURE);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };