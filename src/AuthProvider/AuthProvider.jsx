/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
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
    setLoading(false)
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