import { useEffect } from "react";
import { useSingIn } from "../hooks/useSingIn"
const Login = () => {
  const singInWithGoogle = useSingIn()
  return (
    <>
      <h1>Login</h1>
      <button onClick={singInWithGoogle} className="btn">Sing In With Google</button>
    </>
  )
}
export default Login