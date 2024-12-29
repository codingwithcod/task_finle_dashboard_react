import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { BsCartCheckFill, BsCartXFill, BsFillCartFill } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import ActivityBarChart from "./components/ActivityBarChart";

const DashboardHome = () => {
  return (
    <div className="text-forground">
      <h1 className="mb-5 text-2xl font-semibold">Dashboard</h1>
      {/* ---> Main container */}
      <div className="flex flex-col gap-5">
        {/* ---> Kpi's */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="grid w-full grid-cols-4 gap-3 lg:w-[65%]">
            <div className="flex h-28 flex-col justify-between rounded-md bg-background p-3">
              <div className="flex flex-col gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-500/20">
                  <BsFillCartFill className="text-xl text-blue-500" />
                </div>
                <p className="text-sm font-medium">Total Orders</p>
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold">75</span>
                <div className="flex items-end gap-1 font-semibold text-green-500">
                  <FaCaretUp className="text-xl" />
                  <span>3%</span>
                </div>
              </div>
            </div>

            <div className="flex h-28 flex-col justify-between rounded-md bg-background p-3">
              <div className="flex flex-col gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-green-500/20">
                  <BsCartCheckFill className="text-xl text-green-500" />
                </div>
                <p className="text-sm font-medium">Total Delivered</p>
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold">70</span>
                <div className="flex items-end gap-1 font-semibold text-red-500">
                  <FaCaretDown className="text-xl" />
                  <span>3%</span>
                </div>
              </div>
            </div>

            <div className="flex h-28 flex-col justify-between rounded-md bg-background p-3">
              <div className="flex flex-col gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-500/20">
                  <BsCartXFill className="text-xl text-red-500" />
                </div>
                <p className="text-sm font-medium">Total Cancelled</p>
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold">05</span>
                <div className="flex items-end gap-1 font-semibold text-green-500">
                  <FaCaretUp className="text-xl" />
                  <span>3%</span>
                </div>
              </div>
            </div>

            <div className="flex h-28 flex-col justify-between rounded-md bg-background p-3">
              <div className="flex flex-col gap-1">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-500/20">
                  <RiMoneyRupeeCircleFill className="text-xl text-purple-500" />
                </div>
                <p className="text-sm font-medium">Total Revenue</p>
              </div>
              <div className="flex justify-between">
                <span className="text-2xl font-bold">₹70k</span>
                <div className="flex items-end gap-1 font-semibold text-red-500">
                  <FaCaretDown className="text-xl" />
                  <span>3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---> Circular progres box */}
          <div className="flex h-28 w-full rounded-md bg-background p-3 lg:w-[35%]">
            <div className="flex h-full w-[60%] flex-col justify-between">
              <p className="text-sm font-semibold">Net Profit</p>
              <span className="text-2xl font-extrabold">₹9345.25</span>
              <div className="flex items-end gap-1 font-semibold text-green-500">
                <FaCaretUp className="text-xl" />
                <span>3%</span>
              </div>
            </div>

            {/* ---> Circular progres */}
            <div className="flex w-[40%] flex-col items-center">
              <div className="relative h-[90%] w-40">
                <CircularProgressbar
                  value={70}
                  strokeWidth={12}
                  className="h-full w-full"
                  styles={buildStyles({
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: 0.5,
                    pathColor: `#7095ff`,
                    textColor: "#fff",
                    trailColor: "#7095ff40",
                  })}
                />
                <div className="absolute right-16 top-6 flex flex-col text-center">
                  <span className="text-sm font-bold">70%</span>
                  <span className="text-[7px] leading-none">Goal</span>
                  <span className="text-[7px]">Completed</span>
                </div>
              </div>

              <p className="mt-[2px] text-[7px]">This is generated report</p>
            </div>
          </div>
        </div>

        {/* ---> Activity Graph */}
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* ---> Bar chart */}
          <div className="h-52 w-full rounded-md bg-background lg:w-[65%]">
            <ActivityBarChart />
          </div>
          <div className="h-52 w-full rounded-md bg-background lg:w-[35%]"></div>
        </div>

        {/* ---> Recent orders and feedback. */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="h-52 w-full rounded-md bg-blue-500/50 lg:w-[65%]"></div>
          <div className="h-52 w-full rounded-md bg-red-500/50 lg:w-[35%]"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
