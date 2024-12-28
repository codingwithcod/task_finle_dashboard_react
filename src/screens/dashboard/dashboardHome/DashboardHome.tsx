const DashboardHome = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {[...new Array(10)].map(() => {
          return (
            <div className="h-60 rounded-md bg-background p-4 text-forground">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, hic.</h1>
              <h1 className="text-primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, hic.
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardHome;
