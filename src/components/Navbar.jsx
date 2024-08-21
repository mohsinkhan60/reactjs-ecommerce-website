import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


export const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-around items-center pt-8">
        <h1 className="text-3xl font-semibold ">Mohsin Dev</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-2 rounded-[30px] w-full"
            type="text"
            placeholder="Search Products..."
          />
          <CiSearch className="absolute top-0 right-0 mt-1.5 mr-5" size={25} />
        </div>

        <div className="flex gap-4">
          <div className="icon-wrapper">
            <FaRegUser />
          </div>
          <div className="icon-wrapper">
            <FaCartShopping />
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default Navbar;
