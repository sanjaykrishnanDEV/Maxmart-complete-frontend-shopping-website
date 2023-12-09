import { FaUser } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const cartValue = useSelector(store=>store.cart)
  console.log(cartValue.totalQty)
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
      <div className="flex w-1/3 justify-evenly items-center">
        <CiHeart
          size={15}
          color="black"
          className="border h-10 w-fit me-2 rounded-full p-1"
        />
        <div className="h-20 flex justify-center items-center">
          <div className="relative py-2">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full  bg-white text-black p-3 text-xs ">
                {cartValue.totalQty}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
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
