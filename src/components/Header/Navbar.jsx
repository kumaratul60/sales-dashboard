import { HEADER_LOGO } from "../../constant/constant";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 text-white bg-gray-800 shadow-xl">
      <div className="flex items-center cursor-pointer">
        <img src={HEADER_LOGO} alt="Icon" className="w-full h-12 mr-2" />
      </div>
      <div className="flex items-center gap-5 text-lg font-bold">
        <span className="p-2 transition-colors duration-300 cursor-pointer hover:text-teal-600">
          Dashboard
        </span>
        <span className="p-2 transition-colors duration-300 cursor-pointer hover:text-teal-600">
          Profile
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
