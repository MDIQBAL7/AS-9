import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseinit";

const AuthProvider = ({ children }) => {
    
  const [loading, setLoading] = useState(false);
  
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
         setLoading(true)
      console.log(current);
      setUser(current);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    user,
    setUser,
    createUser,
    signIn,
    signOutUser,
    googleSignIn,
    loading,
    setLoading,
  };

  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>
  }
  return (
    
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
