import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col bg-white">
        <div className="h-[5rem] w-full bg-background">
          <Topbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="flex h-[calc(100%-5rem)] w-full bg-yellow-200">
          {/* ---> Sidebar  */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* ---> Main Content  */}
          <main className="h-full w-full overflow-y-auto bg-gradient-to-br from-deepBlack to-[#02071d] p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
