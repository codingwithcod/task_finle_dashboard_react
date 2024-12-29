const CustomerTable = () => {
  return (
    <div className="p-3">
      <h2 className="font-bold">Customers</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John doe</td>
            <td>35</td>
            <td>Male</td>
            <td>934593458345</td>
            <td>California</td>
          </tr>
        </tbody>
      </table> */}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="border-b border-primary/40 font-medium text-forground/80">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Gender</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">City</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400/50 text-forground/70">
            {[...new Array(10)].map((_, index) => {
              return (
                <tr key={index}>
                  <td className="flex items-center gap-2 px-4 py-2">
                    <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-600/40">
                      <img
                        src="https://dummyjson.com/icon/michaelw/128"
                        alt="customer profile"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    John Doe
                  </td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">Male</td>
                  <td className="px-4 py-2">934593458345</td>
                  <td className="px-4 py-2">California</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
