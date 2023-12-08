import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ref, get, onValue, child } from "firebase/database";
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
  console.log(arr);

  return (
    <div className="flex flex-wrap justify-center items-center h-full w-full">
      {arr.map((item) => (
        <ProductCard info={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductListing;
