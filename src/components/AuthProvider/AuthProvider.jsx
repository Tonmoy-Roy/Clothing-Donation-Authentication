import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); {/*user ache kina check krtese*/ }
    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signinUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function updateUser(updateduser) {
        return updateProfile(auth.currentUser,updateduser );
    }

    function signoutUser(){
        return signOut(auth);
    }

    const authinfo = {
        user, createUser, signinUser, updateUser, signoutUser, 
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;