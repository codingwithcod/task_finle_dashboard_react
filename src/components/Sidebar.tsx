import { AiFillHome } from "react-icons/ai";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    url: "/dashboard",
    icon: <AiFillHome />,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <MdAnalytics />,
  },
  {
    title: "Report",
    url: "/dashboard/report",
    icon: <HiClipboardDocumentCheck />,
  },
  {
    title: "Finance",
    url: "/dashboard/finance",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <IoSettings />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-1 text-forground">
      {navlinks.map((item) => {
        const { url, icon } = item;
        return (
          <NavLink
            key={url}
            to={url}
          >
            <div
              className={`flex h-10 w-full items-center justify-center text-2xl duration-300 hover:bg-primary/10 ${location.pathname === url ? "text-primary" : "text-forground/70"}`}
            >
              {location.pathname === url && (
                <div className="absolute left-0 h-7 w-1 rounded-r-sm bg-primary"></div>
              )}
              {icon}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
