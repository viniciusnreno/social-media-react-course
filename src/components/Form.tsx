import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

const Form = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required('Add an title'),
    description: yup.string().required('Add an description')
  })

  const { register, handleSubmit, formState: { errors }  } = useForm<CreateFormData>({
    resolver: yupResolver(schema)
  })

  const postRef = collection(db, "posts")

  const userSubmit = async (data: CreateFormData) => {
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
      userImage: user?.photoURL
    })
    navigate('/')
  } 

  return (
    <form onSubmit={handleSubmit(userSubmit)} className="md:w-1/3 w-full px-3 mx-auto text-left">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input {...register("title")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span className="dark:text-white">{errors.title?.message}</span>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Description</label>
        <input {...register("description")} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span className="dark:text-white">{errors.description?.message}</span>
      </div>
      <input type="submit" value="Finish" className="btn cursor-pointer"/>
    </form>
  )
}

export default Form