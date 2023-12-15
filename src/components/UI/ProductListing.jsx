import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { set, ref, get, onValue, child } from "firebase/database";
import { db } from "../../utils/firebase";
const ProductListing = () => {
  const [data, setdata] = useState({});
  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setdata(data);
    });
  }
  let arr = [...Object.values(data)];
  //console.log(arr.length);

  return (
    <div className="flex flex-col flex-wrap  h-full overflow-hidden">
      <div className="flex flex-col flex-wrap justify-center items-center overflow-x-scroll">
        <h2 className=" text-lg font-semibold p-2">Lighting</h2>
        <div className="flex  scroll-m-5 w-[90vw]">
          {arr
            .filter((items) => items.category === "home-decoration")
            .map((item) => (
              <ProductCard info={item} key={item.id} />
            ))}
        </div>
      </div>
      <div className="overflow-x-scroll flex flex-col flex-wrap justify-center items-center">
        <h2 className=" text-lg font-semibold p-2">Laptops</h2>
        <div className="flex  scroll-m-5 w-[90vw]">
          {arr
            .filter((items) => items.category === "laptops")
            .map((item) => (
              <ProductCard info={item} key={item.id} />
            ))}
        </div>
      </div>
      <div className="overflow-x-scroll flex flex-col flex-wrap justify-center items-center">
        <h2 className=" text-lg font-semibold p-2">Groceries</h2>
        <div className="flex  scroll-m-5 w-[90vw]">
          {arr
            .filter((items) => items.category === "groceries")
            .map((item) => (
              <ProductCard info={item} key={item.id} />
            ))}
        </div>
      </div>
      <div className="overflow-x-scroll flex flex-col flex-wrap justify-center items-center">
        <h2 className=" text-lg font-semibold p-2">Automotive</h2>
        <div className="flex  scroll-m-5 w-[90vw]">
          {arr
            .filter((items) => items.category === "automotive")
            .map((item) => (
              <ProductCard info={item} key={item.id} />
            ))}
        </div>
      </div>

      {/* {arr.map((item) => (
        <ProductCard info={item} key={item.id} />
      ))} */}
    </div>
  );
};

export default ProductListing;
