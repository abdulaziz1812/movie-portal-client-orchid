import { createUserWithEmailAndPassword } from 'firebase/auth';
import  { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading,setLoading] =useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updatedData) => {
        setLoading(true);
        updateProfile(auth.currentUser, updatedData);
        setUser({ ...auth.currentUser, ...updatedData });

    };

    const userInfo = {

        user,
        loading,
        createUser,
    }

    return (
        <AuthContext.Provider value = {userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;