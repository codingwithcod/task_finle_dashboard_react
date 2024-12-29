import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaCaretUp } from "react-icons/fa";

const NetProfitBox = () => {
  return (
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
  );
};

export default NetProfitBox;
