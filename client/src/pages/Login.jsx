import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { instaPopUp } from "../services/instagram"

export const Login = () => {

  const { user, handleLogout } = useContext(AuthContext)

  return (
    <div>
      <div>
        {user ? JSON.stringify(user) : ""}
      </div>
      {
        !!user ? 
        <button onClick={handleLogout}>Logout</button>
        :
        <button onClick={instaPopUp}>Login</button>
      }
      { user && 
        <div>
        </div>
      }
    </div>
  )
}
