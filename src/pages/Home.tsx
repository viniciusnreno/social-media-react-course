import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../config/firebase"
import Post from '../components/Post'
import { useAuthState } from "react-firebase-hooks/auth"

export interface PostData {
  id: string,
  title: string,
  description: string,
  userId: string,
  username: string,
  userImage: string
}
const Home = () => {  
  const [postList, setPostList] = useState<PostData[] | null>(null)
  const postRef = collection(db, "posts")
  const getPost = async () => {
    const response = await getDocs(postRef)
    setPostList(
      response.docs.map((doc) => ({ ...doc.data(), id: doc.id})) as PostData[]
    )
  }

  useEffect(() => {
    getPost();
  }, [])

  return (
    <>
      <h1>Home </h1>
      <div>{postList?.map(post => <Post post={post}/>)}</div>
    </>
  )
}

export default Home