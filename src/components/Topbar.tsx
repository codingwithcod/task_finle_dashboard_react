import { FiSearch } from "react-icons/fi";
import { RiApps2AiFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { IoMdMail, IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex h-full items-center justify-between px-5">
      {/* ---> Left side Logo and Search bar */}
      <div className="flex items-center gap-20">
        <Link to={"/dashboard"}>
          <RiApps2AiFill className="text-4xl text-primary" />
        </Link>
        <div className="relative flex h-8 items-center gap-2 bg-gray-800/30 text-forground/80">
          <FiSearch className="absolute left-2" />
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full rounded-md border border-gray-600 bg-transparent pl-8 outline-none placeholder:text-forground/50 focus:border-2 focus:border-gray-400"
          />
        </div>
      </div>
      {/* ---> Right side icons */}
      <div className="flex items-center gap-4 text-forground/70">
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-600/50">
          <IoMdMail className="text-xl" />
        </div>
        <Link to={"/dashboard/settings"}>
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-600/50">
            <IoSettings />
          </div>
        </Link>
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-600/50">
          <IoMdNotifications />
        </div>
        <div className="ml-8 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-600/50">
          <img
            src="https://v2theabhipatel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftheabhipatel.f1b4c67f.png&w=640&q=75"
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
