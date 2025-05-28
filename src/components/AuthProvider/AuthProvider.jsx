import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); {/*user ache kina check krtese*/ }
    const [loading, setLoading] = useState(true); {/*true" means: "I'm still checking!*/ }

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signinUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function updateUser(updateduser) {
        return updateProfile(auth.currentUser, updateduser);
    }

    function signoutUser() {
        return signOut(auth);
    }

    const authinfo = {
        user, loading, createUser, signinUser, updateUser, signoutUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false); {/*false" means: "Check is done, I know the user's status now.*/ }

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