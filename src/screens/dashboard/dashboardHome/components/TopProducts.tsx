import { axiosClient } from "@/utils/axiosClient";
import { useEffect, useState } from "react";

interface IProuduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  thumbnail: string;
}

const TopProducts = () => {
  const [products, setProducts] = useState<IProuduct[]>([]);

  /** ---> Fetching products on load. */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosClient.get("/products/search?q=phone");
      setProducts(res.data.products);
    } catch (error) {
      // as now now disable eslint rule for console
      console.log(error); // eslint-disable-line
    }
  };

  return (
    <div className="p-3">
      <h2 className="mb-3 font-bold">Top Selling Products</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead className="border-b border-primary/40 font-medium text-forground/80">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-400/50 text-forground/70">
            {products.map((product, index) => {
              const { title, price, stock, thumbnail } = product;
              return (
                <tr key={index}>
                  <td className="flex items-center gap-2 px-4 py-2">
                    <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-gray-600/40">
                      <img
                        src={thumbnail}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="w-20 truncate">{title}</p>
                  </td>
                  <td className="px-4 py-2">₹{price}</td>
                  <td className="px-4 py-2">{stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
