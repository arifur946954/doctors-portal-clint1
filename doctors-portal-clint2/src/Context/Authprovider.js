import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext=  createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    //for dashboard loading information
    const [loading,setLoding]=useState(true);
    //for create user 
const createUser=(email,password)=>{
    setLoding(true)
return createUserWithEmailAndPassword(auth, email, password)
}
//for login user
const signIn=(email,password)=>{
    setLoding(true)
  return  signInWithEmailAndPassword(auth, email, password)
}
//for logout 
const logOut=()=>{
    return signOut(auth);
}
//for update user
const updateUser=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
}
//for manage user
useEffect(()=>{
  const unsubCriber=  onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoding(false);
    })
    return()=> unsubCriber()

},[])
  
    const authInfo={
        createUser,
        signIn,
        logOut,
        updateUser,
        loading,
        user
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;