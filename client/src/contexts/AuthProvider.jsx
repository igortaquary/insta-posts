import { createContext, useEffect, useState } from "react";
import { LoadingOverlay } from "../components/LoadingOverlay";
import { FacebookAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, handleAuthStateChanged)
  }, [])

  const handleAuthStateChanged = (usr) => {
    if(usr) {
      console.log(usr)
      setUser(usr)
    } else {
      setUser()
    }
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const provider = new FacebookAuthProvider()
      provider.addScope("instagram_basic")
      provider.addScope("user_gender")
      provider.addScope("user_birthday")
      //provider.addScope("instagram_graph_user_profile")
      //provider.addScope("instagram_graph_user_media")
      const response = await signInWithPopup(auth, provider)
      console.log(response)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const handleLogout = () => {
    setLoading(true)
    try {
      auth.signOut()
    } catch (err) {
      console.error(err)
      
    }
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogout,
        handleLogin,
        user
      }}
    >
      { loading && <LoadingOverlay /> }
      {children}
    </AuthContext.Provider>
  )
}