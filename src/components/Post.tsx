import { PostData as IPost } from '../pages/Home'
interface Props {
  post: IPost
}

const Post = (props: Props) => {
  const { post } = props;
  return (
    <div className="max-w-sm mb-7 w-max mx-auto lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.description}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={post.userImage} alt="Avatar of Jonathan Reinink" />
          <div className="text-sm">
            <p className="text-gray-600 leading-none">{post.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post