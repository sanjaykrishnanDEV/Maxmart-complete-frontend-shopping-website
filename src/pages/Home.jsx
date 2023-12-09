import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Shop from "./Shop";
import ProductListing from "../components/UI/ProductListing";
const Home = () => {
  const [heroProduct, setheroproduct] = useState(null);
  useEffect(() => {
    getHero();
  }, []);
  async function getHero() {
    const data = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const json = await data.json();
    setheroproduct(json.products);
  }
  if (!heroProduct) return <div>loading...</div>;
  return (
    <div className="  w-inherit">
      <div className=" md:h-[50vh] sm:h-fit h-[90vh] bg-black w-full flex flex-wrap  justify-center items-center">
        <div className="text-white p-3 flex flex-wrap flex-col justify-center items-center">
          <span className="text-6xl">{heroProduct[0].title}</span>
          <span className="text-xl">{heroProduct[0].description}</span>
          <span className="text-md font-mono">
            @Just ${heroProduct[0].price}
          </span>
          <Link to="/shop">
            <button className="bg-red-600 m-3 p-3 rounded-lg hover:bg-red-100 hover:text-black text-white">
              Know More
            </button>
          </Link>
        </div>
        <div>
          <img src={heroProduct[0].images[0]} />
        </div>
      </div>
      <div className="flex justify-center p-5 flex-wrap bg-slate-300 rounded-md mt-5 mx-4">
        <div
          className="flex flex-wrap justify-between
         items-center mx-3  w-[80vw]  mt-2 "
        >
          <div className=" w-[1/3] bg-green-500 h-auto rounded-xl text-yellow-50 font-medium text-base p-5">
            <span>Free shipping</span>
          </div>
          <div className="w-[1/3]  bg-purple-500 h-auto rounded-xl text-yellow-50 font-medium text-base p-5">
            <span>Easy Returns</span>
          </div>
          <div className=" w-[1/3] bg-orange-500 h-auto rounded-xl text-yellow-50 font-medium text-base p-5">
            <span>Secured payments</span>
          </div>
        </div>
      </div>
      


      <ProductListing />
    </div>
  );
};

export default Home;
