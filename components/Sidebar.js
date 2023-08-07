import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/20/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userState } from "@/app/atom/userAtom";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  console.log(currentUser);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(db, "users", auth.currentUser.providerData[0].uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  }, []);

  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1 my-2 items-center py-2">
        <Image
          width="35"
          height="60"
          alt="Logo of Twitter"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/X_logo_2023_UPDATE.svg/300px-X_logo_2023_UPDATE.svg.png"
          className="ml-2"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
        <SidebarMenuItem text="Explore" Icon={MagnifyingGlassIcon} />
        {currentUser && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={EnvelopeIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Verified" Icon={CheckBadgeIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
          </>
        )}
      </div>

      {/* Button */}
      {currentUser ? (
        <>
          <button className="bg-[#1da1f2] text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Post
          </button>

          {/* Mini Profile */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              src={currentUser?.userImg}
              onClick={onSignOut}
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="hoverEffect leading-5 hidden xl:inline">
              <h4 className="font-bold">{currentUser?.name}</h4>
              <p className="text-gray-500">@{currentUser?.username}</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
