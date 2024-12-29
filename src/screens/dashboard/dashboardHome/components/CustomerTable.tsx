import Loader from "@/components/Loader";
import { axiosClient } from "@/utils/axiosClient";
import { useEffect, useState } from "react";

interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  image: string;
  address: {
    city: string;
  };
}

const CustomerTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /** ---> Fetching products on load. */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await axiosClient.get("/users?limit=20&delay=2000");
      setUsers(res.data.users);
    } catch (error) {
      // as now now disable eslint rule for console
      console.log(error); // eslint-disable-line
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-3">
      <h2 className="mb-3 font-bold">Customers</h2>

      {isLoading && (
        <div className="flex h-40 items-center justify-center">
          <Loader />
        </div>
      )}

      {!isLoading && (
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
              {users.map((user, index) => {
                const { firstName, lastName, image, age, gender, phone, address } = user;
                return (
                  <tr key={index}>
                    <td className="flex items-center gap-2 px-4 py-2">
                      <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-600/40">
                        <img
                          src={image}
                          alt="customer profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="w-24 truncate">
                        {firstName} {lastName}
                      </p>
                    </td>
                    <td className="px-4 py-2">{age}</td>
                    <td className="text-nowrap px-4 py-2">{gender}</td>
                    <td className="text-nowrap px-4 py-2">{phone}</td>
                    <td className="text-nowrap px-4 py-2">{address.city}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
