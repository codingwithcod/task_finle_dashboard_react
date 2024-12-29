import { BsCartCheckFill, BsCartXFill, BsFillCartFill } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const KPIBox = () => {
  return (
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
  );
};

export default KPIBox;
