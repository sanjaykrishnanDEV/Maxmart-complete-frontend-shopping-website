import React, { useState } from "react";
import Allproducts from "./Allproducts";
import Allusers from './Allusers'
import Addproducts from "./Addproducts";
const Dashboard = () => {
  const [active, setactive] = useState("dashboard");
  return (
    <div className="h-[90vh] overflow-y-scroll">
      <div className="flex bg-sky-600 h-10 text-lime-50 font-bold items-center w-full justify-around">
        <div
          className={
            active === "dashboard"
              ? "bg-white cursor-pointer text-black font-normal p-2 rounded-t-xl"
              : "bg-sky-600 text-black cursor-pointer font-normal p-2 rounded-t-xl"
          }
        >
          <span onClick={() => setactive("dashboard")}>AddProduct</span>
        </div>
        <div
          className={
            active === "allproducts"
              ? "bg-white text-black font-normal p-2 cursor-pointer rounded-t-xl"
              : "bg-sky-600 text-black font-normal p-2 rounded-t-xl cursor-pointer"
          }
        >
          <span onClick={() => setactive("allproducts")}>Allproducts</span>
        </div>
        <div
          className={
            active === "allusers"
              ? "bg-white text-black font-normal p-2 rounded-t-xl cursor-pointer"
              : "bg-sky-600 text-black font-normal p-2 rounded-t-xl cursor-pointer"
          }
        >
          <span onClick={() => setactive("allusers")}>Allusers</span>
        </div>
      </div>
      <div>
      {active === "dashboard" ? <Addproducts /> : null}
      {active === "allproducts" ? <Allproducts /> : null}
      {active === "allusers" ? <Allusers /> : null}
        {/* <Allproducts/> */}
      </div>
    </div>
  );
};

export default Dashboard;
