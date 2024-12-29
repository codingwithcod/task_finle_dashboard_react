import ActivityBarChart from "./components/ActivityBarChart";
import { TfiTarget } from "react-icons/tfi";
import { PiHamburger } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { MdChevronRight } from "react-icons/md";
import CustomerTable from "./components/CustomerTable";
import TopProducts from "./components/TopProducts";
import NetProfitBox from "./components/NetProfitBox";
import KPIBox from "./components/KPIBox";

const DashboardHome = () => {
  return (
    <div className="text-forground">
      <h1 className="mb-5 text-2xl font-semibold">Dashboard</h1>
      {/* ---> Main container */}
      <div className="flex flex-col gap-5">
        {/* ---> Kpi's */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <KPIBox />

          {/* ---> Net Profit box */}
          <NetProfitBox />
        </div>

        {/* ---> Activity Graph */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* ---> Bar chart */}
          <div className="h-52 w-full rounded-md bg-background lg:w-[65%]">
            <ActivityBarChart />
          </div>

          {/* ---> Goals, Popular Dishes, Menus */}
          <div className="flex h-52 w-full flex-col justify-between rounded-md bg-background p-3 text-forground/80 lg:w-[35%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                  <TfiTarget className="text-xl text-red-500" />
                </div>
                <span>Goals</span>
              </div>

              <div className="cursor-pointer rounded-full bg-gray-600/50 p-1 text-xl">
                <MdChevronRight />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                  <PiHamburger className="text-xl text-blue-500" />
                </div>
                <span>Popular Dishes</span>
              </div>

              <div className="cursor-pointer rounded-full bg-gray-600/50 p-1 text-xl">
                <MdChevronRight />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                  <BiDish className="text-xl text-cyan-500" />
                </div>
                <span>Menus</span>
              </div>

              <div className="cursor-pointer rounded-full bg-gray-600/50 p-1 text-xl">
                <MdChevronRight />
              </div>
            </div>
          </div>
        </div>

        {/* ---> Recent Customer and feedback. */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* ---> Customer table. */}
          <div className="min-h-52 w-full rounded-md bg-background lg:w-[65%]">
            <CustomerTable />
          </div>
          {/* ---> Customer feedback. */}
          <div className="min-h-52 w-full rounded-md bg-background lg:w-[35%]">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
