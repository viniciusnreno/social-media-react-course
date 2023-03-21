import { auth, provider } from "../config/firebase" 
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export const useSingIn = () => {
  const navigate = useNavigate()
  const singInWithGoogle = async () => {
    const response = await signInWithPopup(auth, provider); 
    navigate('/')
  }
  return singInWithGoogle
}