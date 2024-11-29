

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";


export const AuthContext = createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    // console.log(user, loading);

    // create new user
    const createNewUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Set the user
            setLoading(false);      // Set loading to false once the user is loaded
        });
    
        return () => {
            unsubscribe(); // Clean up the listener
        };
    }, []);
    

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;