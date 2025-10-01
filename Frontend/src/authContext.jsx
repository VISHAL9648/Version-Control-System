
import React, {crateContext, useState, useEffect, useContext} from 'react'
import { Children } from 'react';
import { createContext } from 'react'

const AuthContext = createContext();
export const  useAuth =() =>{
    return useContext(AuthContext);
}

export const AuthProvider =({Children}) =>{
  const [currenUser, setCurrentUser] = useState(null);
useEffect(() =>{
    const userId = localStorage.getItem('userId');
    if(userId){
        setCurrentUser(userId);
    }
},[]);
const value = {
    currenUser, setCurrentUser
}
return <AuthContext.Provider value={value}> {Children}</AuthContext.Provider>

}