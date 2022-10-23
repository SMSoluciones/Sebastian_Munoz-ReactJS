import React, { useEffect, useState, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext([]);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const logout = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const loginWithGoogle = () => {
    const googleSign = new GoogleAuthProvider();
    signInWithPopup(auth, googleSign);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          signUp,
          login,
          logout,
          user,
          loginWithGoogle,
          resetPassword,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
