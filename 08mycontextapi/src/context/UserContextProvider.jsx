import { useState } from "react";
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {   //Create Context Provider function in a file that returns contextProvider
    //2. Provider se data do
    const [user, setUser] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>      
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

/*  Template code to create contextProvider function for any context
1. Provider ki ek dedicated file bana skte hain jaha wo data provide kr rha hoga aur usko wrap around krdege sare components mein 
ya phir kisi ek file se bhi provide kar skte hain
2. All children wrapped around by UserContextProvider will be able to access data: user and setUser
*/