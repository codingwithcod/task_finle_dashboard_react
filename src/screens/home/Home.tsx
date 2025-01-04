import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-[#030138] to-[#000000] text-center">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-5xl">
          Dashboard <span className="text-lg font-semibold sm:text-2xl">by</span>
        </h1>
        <h1 className="bg-gradient-to-r from-orange-700 via-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent sm:text-8xl">
          TheAbhiPatel
        </h1>
      </div>
      <div className="mt-10">
        <Link to={"/dashboard"}>
          <button className="h-10 w-40 rounded-md border border-white font-semibold text-white duration-500 hover:bg-white/90 hover:text-black">
            Visit Dashboard
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
