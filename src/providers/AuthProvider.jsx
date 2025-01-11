import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading,setLoading] =useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const updateUserProfile = (updatedData) => {
        setLoading(true);
        updateProfile(auth.currentUser, updatedData);
        setUser({ ...auth.currentUser, ...updatedData });

    };
    
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const userInfo = {

        user,
        setUser,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile,
        googleLogin,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value = {userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;