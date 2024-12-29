import { FC, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface IChartData {
  name: string;
  income: number;
}

const chart = [
  { name: "1", income: 3000 },
  { name: "3", income: 3000 },
  { name: "5", income: 4000 },
  { name: "7", income: 6000 },
  { name: "9", income: 5000 },
  { name: "11", income: 7000 },
  { name: "13", income: 9000 },
  { name: "15", income: 8000 },
  { name: "17", income: 9000 },
  { name: "19", income: 12000 },
  { name: "21", income: 11000 },
  { name: "23", income: 10000 },
  { name: "25", income: 7000 },
  { name: "27", income: 9000 },
  { name: "29", income: 11000 },
  { name: "31", income: 11000 },
];

const ActivityBarChart: FC = () => {
  const [chartData] = useState<IChartData[]>(chart);

  const customYAxisTick = (tick: number) => {
    return `${tick / 1000}K`;
  };

  return (
    <div className="h-full w-full rounded-md bg-background">
      {/* ---> Bar chart Header  */}
      <div className="flex h-[20%] w-full justify-between p-3 pt-2">
        <div>
          <h2 className="text-semiDarkText font-bold">Activity</h2>
        </div>

        <div className="text-xxs text-lightText flex flex-col gap-2 sm:flex-row">
          <div className="flex h-7 w-24 cursor-pointer items-center justify-center gap-1 rounded-full border border-gray-400/40 bg-gray-500/40">
            <p className="text-sm">Monthly</p>
            <FaCaretDown />
          </div>
        </div>
      </div>

      {/* ---> Bar chart goes here  */}
      <div className="flex h-[80%] w-full justify-between">
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis
              dataKey="name"
              fontSize={10}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              fontSize={14}
              axisLine={false}
              tickLine={false}
              tickFormatter={customYAxisTick}
            />

            <Bar
              dataKey="income"
              fill="#7095ff"
              barSize={15}
              radius={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityBarChart;
