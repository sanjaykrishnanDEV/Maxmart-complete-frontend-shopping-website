import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const Checkout = () => {
  const [discount, setDiscount] = useState(15);
  const totalItems = useSelector((store) => store.cart.totalQty);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  useEffect(() => {
    if (totalAmount > 100) {
      setDiscount(0);
    }
  }, [totalAmount]);
  return (
    <div className="flex flex-row p-10 flex-wrap justify-evenly items-center ">
      <div className=" w-1/2 h-fit">
        <form className="flex flex-col py-3 p-2 text-xl">
          <p>Billing Information</p>
          <input
            type="text"
            placeholder="Enter name"
            className="mb-3 p-1 rounded-md border border-black"
          />
          <input
            type="text"
            placeholder="Enter address"
            className="mb-3 p-1 rounded-md border border-black"
          />
          <input
            type="text"
            placeholder="Enter email"
            className="mb-3 p-1 rounded-md border border-black"
          />
          <input
            type="text"
            placeholder="Enter pincode"
            className="mb-3 p-1 rounded-md border border-black"
          />
          <input
            type="text"
            placeholder="Enter personal note"
            className="p-1 rounded-md border border-black"
          />
        </form>
      </div>
      <div className="w-fit   p-10 text-white bg-blue-950 h-fit rounded-md">
        <p className="m-2">Total Quantity: {totalItems}</p>
        <p className="m-2">SubTotal: {totalAmount}</p>
        <p className="m-2">Shipping: {discount}</p>
        <hr />

        <h1 className="text-xl font-light">
          Total:{totalItems > 0 ? totalAmount + discount : 0}
        </h1>
        <hr />
        <button 
        onClick={()=>toast.success("order placed thank you💝")}
        className="bg-red-500 rounded-md p-1 text-lime-50 mt-2 w-full">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
