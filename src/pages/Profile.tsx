import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const singUserOut = async () => {
    await signOut(auth);
    navigate('/')
  }
  
  return (
    <div>
      <h1>{user?.displayName}</h1>
      <img className="mx-auto mb-16" src={user?.photoURL || ""} alt="" />
      <button onClick={singUserOut} className="btn">Logout</button>
    </div>
  )
}

export default Profile