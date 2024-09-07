import { createContext, useState } from "react";

const USER_STRUCTURE = {
  name: "",
  email: "",
  password: "",
  avatar: "",
};

export const UserContext = createContext(USER_STRUCTURE);

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(USER_STRUCTURE);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
