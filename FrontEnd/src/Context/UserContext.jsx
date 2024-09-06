import { createContext } from "react";

let userInfo = {
    name: "",
    email: "",
    password: "",
    avatar: "",
    token: "",
};

export const UserContext = createContext(userInfo);
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;