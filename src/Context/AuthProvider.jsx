import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebaseinit';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password,) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password, ) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
       return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
        
    }

 
useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, current => {
        console.log('on auth state change current', current);
        setUser(current);

    });
    return () => {
        unsubscribe();
    }
}, [])
    const userInfo = {
        user,
        setUser,
        createUser,
        signIn,
        signOutUser,
        googleSignIn

    };
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;