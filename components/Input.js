import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { db, storage } from "@/firebase";
import { useRecoilState } from "recoil";
import { userState } from "@/app/atom/userAtom";

export default function Input() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-1">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQGeBzrgYJKUlw/profile-displayphoto-shrink_800_800/0/1674196993755?e=2147483647&v=beta&t=lDJA87U9355i7IW2yilVbx4uYLnorbCmZUfk32sE6Ek"
        alt="user-img"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="1"
            placeholder="What is happening?!"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex">
            <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-[#1da1f2] hover:bg-sky-100" />
            <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-[#1da1f2] hover:bg-sky-100" />
          </div>
          <button className="bg-[#1da1f2] text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
