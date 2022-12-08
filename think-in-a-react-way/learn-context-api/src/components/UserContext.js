import React, { useState, createContext } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const login = () => {
        fetch("/login")
            .then((response) => {
                setIsAuth(true);
                setUserInfo(response.user)
            });
    };

    const logout = () => {
        fetch("/logout")
            .then((response) => {
                setIsAuth(false);
                setUserInfo(null);
            });
    };

    const value = {
        userInfo,
        setUserInfo,
        isAuth,
        setIsAuth,
        login,
        logout
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export  default UserContext;