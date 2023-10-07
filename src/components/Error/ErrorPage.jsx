import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const getError = useRouteError();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="font-extrabold tracking-widest text-9xl text-white-A700 animate-bounce">
        {getError.status || 404}
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rotate-12 rounded p-2">
        {getError.statusText || "Oops, Page Not Found"}
      </div>

      <button className="mt-5">
        <Link className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </Link>
      </button>
    </main>
  );
};

export default ErrorPage;