import {createContext, useContext, useState} from "react";

const UserContext = createContext({});
export const AppContextProvider = ({children}) => {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{userName, setUserName}} >
            {children}
        </UserContext.Provider>
    );
}

export const Auth = ()=>{
    return useContext(UserContext);
}