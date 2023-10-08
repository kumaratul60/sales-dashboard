import { Link, useNavigate } from "react-router-dom";
import { HEADER_LOGO } from "../../constant/constant";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between p-5 text-white bg-gray-800 shadow-xl">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={HEADER_LOGO} alt="Icon" className="w-full h-6 mr-2 lg:h-12" />
      </div>
      <div className="flex items-center gap-5 text-lg font-bold">
        <span
          className="p-2 transition-colors duration-300 cursor-pointer hover:text-teal-600"
          onClick={() => navigate("/")}
        >
          Home
        </span>

        <Link to="/dashboard">
          <span
            className="p-2 transition-colors duration-300 cursor-pointer hover:text-teal-600"
            // onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>
        </Link>
        <span className="p-2 transition-colors duration-300 cursor-pointer hover:text-teal-600">
          Profile
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
