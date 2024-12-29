const DashboardHome = () => {
  return (
    <div className="text-forground">
      <h1 className="mb-5 text-2xl font-semibold">Dashboard</h1>
      {/* ---> Main container */}
      <div className="flex flex-col gap-5">
        {/* ---> Kpi's */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="grid w-full grid-cols-4 gap-3 lg:w-[65%]">
            <div className="h-28 rounded-md bg-background"></div>
            <div className="h-28 rounded-md bg-background"></div>
            <div className="h-28 rounded-md bg-background"></div>
            <div className="h-28 rounded-md bg-background"></div>
          </div>
          <div className="h-28 w-full rounded-md bg-red-500/50 lg:w-[35%]"></div>
        </div>

        {/* ---> Activity Graph */}
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="h-52 w-full rounded-md bg-blue-500/50 lg:w-[65%]"></div>
          <div className="h-52 w-full rounded-md bg-red-500/50 lg:w-[35%]"></div>
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
