/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)

const googleUser = new GoogleAuthProvider();

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(auth, googleUser);
};

const updateUserInfo =(name,photo) =>{
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    
}
 const createUser = (email, password) => {
   setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
 };
 const logIn = (email, password) => {
   setLoading(true);
   return signInWithEmailAndPassword(auth, email, password);
 };
 const logOut = () => {
   setLoading(true);
   return signOut(auth);
 };

 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     console.log("Current user is", currentUser);
     if(currentUser){
      axios.post("https://summer-camp-server-i-am-zarif.vercel.app/jwt" ,{
        email:currentUser.email
      }).then(data =>{
        
        console.log(data.data.token);
        localStorage.setItem("access-token",data.data.token)
        setLoading(false);
      })
     }
     else{
      localStorage.removeItem("access-token");
     }
    
   });
   return () => {
     return unsubscribe();
   };
 });

    const userInfo = {
      user,
      loading,
      createUser,
      logIn,
      logOut,
      googleSignIn,
      updateUserInfo,
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;