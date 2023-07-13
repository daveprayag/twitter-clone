import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        src={post.userImg}
        className="h-11 w-11 rounded-full mr-4"
        alt="user-img"
      />
      {/* right side */}
      <div className="flex-1">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px] text-gray-600">
              {post.username}
            </span>
            <span>·</span>
            <span className="text-sm sm:text-[15px] hover:underline text-gray-600">
              {post.timestamp}
            </span>
          </div>
          {/* post edit icon */}
          <EllipsisHorizontalIcon className="h-9 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>
        {/* post text */}
        <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
          {post.text}
        </p>
        {/* post image */}
        <img src={post.img} className="rounded-2xl mr-2" alt="post-img" />
        {/* post icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatBubbleOvalLeftIcon className="h-8 w-8 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-8 w-8 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <HeartIcon className="h-8 w-8 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <ChartBarIcon className="h-8 w-8 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ShareIcon className="h-8 w-8 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
