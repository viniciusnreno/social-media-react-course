import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
const Profile = () => {
  const [user] = useAuthState(auth)
  console.log(user?.photoURL)
  return (
    <div>
      <h1>{user?.displayName}</h1>
      <img className="mx-auto" src={user?.photoURL || ""} alt="" />
    </div>
  )
}

export default Profile