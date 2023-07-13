import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Prayag Dave",
      username: "@daveprayag",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQGeBzrgYJKUlw/profile-displayphoto-shrink_800_800/0/1674196993755?e=2147483647&v=beta&t=lDJA87U9355i7IW2yilVbx4uYLnorbCmZUfk32sE6Ek",
      img: "https://images.unsplash.com/photo-1607960708254-60fb0ba03f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      text: "Hala Madrid!",
      timestamp: "just a moment ago",
    },
    {
      id: "2",
      name: "Prayag Dave",
      username: "@daveprayag",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQGeBzrgYJKUlw/profile-displayphoto-shrink_800_800/0/1674196993755?e=2147483647&v=beta&t=lDJA87U9355i7IW2yilVbx4uYLnorbCmZUfk32sE6Ek",
      img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
      text: "Photographer",
      timestamp: "6h",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-3 px-3 sticky items-center top-0 z-50 bg-white border-b border-gray-200 bg-opacity-81">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
