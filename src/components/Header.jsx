import { FaUser } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="h-12 w-full bg-red-600 flex justify-between items-center">
      <div className="flex text-white font-semibold text-xl">
        <CiShop />
        <NavLink>
          <span className="cursor-pointer">MAXMART</span>
        </NavLink>
      </div>
      <div className="w-1/3 flex justify-between text-white font-medium">
        <NavLink to={"home"}>
          <span className="cursor-pointer">Home</span>
        </NavLink>
        <NavLink to={"shop"}>
          <span className="cursor-pointer">shop</span>
        </NavLink>
        <NavLink to={"cart"}>
          <span className="cursor-pointer">cart</span>
        </NavLink>
      </div>
      <div className="flex">
        <CiHeart
          size={15}
          color="black"
          className="border h-10 w-full me-2 rounded-full p-1"
        />
        <NavLink to={"user"}>
          <FaUser
            size={20}
            color="white"
            className="border h-10 w-full me-2 rounded-full p-1"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
