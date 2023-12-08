import React from "react";

const ProductCard = ({ info }) => {

  console.log(info?.title);
  return (
    <div className=" bg-slate-400 rounded-lg w-40 m-3 h-52">
      <div className=" h-3/4">
        <img src={info?.image} className=" h-3/4 w-full p-1 rounded-md"/>
      </div>
    <div>{info?.title}</div>
    </div>
  );
};

export default ProductCard;
