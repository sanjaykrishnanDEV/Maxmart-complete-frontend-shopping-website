import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";
import { toast, Toaster } from "react-hot-toast";
import { getDatabase, ref, child, push, update } from "firebase/database";
import { db } from "../utils/firebase";
import Reviews from "../components/Reviews";
const Productdetails = () => {
  const [active, setactive] = useState(true);
  const [data, setdata] = useState([]);
  const [userName, setuserName] = useState("");
  const [userReview, setuserReview] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  async function getDetails() {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const data = await response.json();
    setdata(data);
  }

  useEffect(() => {
    getDetails();
  }, []);
  function handleAddToCart() {
    dispatch(
      cartActions.addItem({
        id: data?.id,
        title: data.title,
        price: data.price,
        image: data.image,
      })
    );
    toast.success("product added to cart", { icon: "😁😁" });
  }
  function handleSubmitReview(userName, userReview) {
    if(!userName && !userReview ){
      return toast.error("Fill all fields")
    }
    const reviewRef = ref(db, "products/" + id + "/reviews/");
    const reviewKey = push(reviewRef).key;
    const reviews = {
      userName,
      userReview,
    };
    update(child(reviewRef, reviewKey), reviews)
      .then(() => {
        toast.success("Review added successfully");
        setuserName("");
        setuserReview("");
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  }
  // Early return if data is empty
  if (!data) {
    return null;
  }
  return (
    <div>
      <Toaster />
      <div className="min-h-full w-full flex flex-col flex-wrap justify-center items-center ">
        <div className="w-1/2">
          {data.images && data.images.length > 0 && (
            <img className=" h-40" src={data.images[0]} />
          )}
        </div>
        <div className="w-1/2 flex flex-col font-mono ms-2 ">
          <h2 className="text-4xl font-semibold">{data.title}</h2>
          <h2 className="text-md font-normal">{data.description}</h2>
          <span>Ratings: {Math.floor(data.rating)}</span>
          <span>In Stocks: {Math.floor(data.stock)}</span>
          <button
            onClick={handleAddToCart}
            className="w-1/3 bg-red-600 rounded-lg text-white hover:bg-red-300 hover:text-black"
          >
            Add to Cart
          </button>
        </div>
        {/* review */}
        <div className="w-1/2 mt-2 border p-10">
          <div className="flex justify-between">
            <p
              onClick={() => {
                if (active === false) {
                  setactive(() => !active);
                }
              }}
              className={
                active
                  ? "bg-red-400 p-2 rounded-md cursor-pointer"
                  : "bg-slate-50 p-2 rounded-md cursor-pointer"
              }
            >
              Add review
            </p>
            <p
              onClick={() => {
                if (active !== false) {
                  setactive(() => !active);
                }
              }}
              className={
                !active
                  ? "bg-red-400 p-2 rounded-md cursor-pointer"
                  : "bg-slate-50 p-2 rounded-md cursor-pointer"
              }
            >
              All reviews
            </p>
          </div>
          {active ? (
            <div className="flex flex-col m-2">
              <input
                onChange={(e) => setuserName(e.target.value)}
                type="text"
                required
                placeholder="Enter your name"
                className="border rounded-md p-2 px-3 border-black"
              />
              <input
                onChange={(e) => setuserReview(e.target.value)}
                type="text"
                required
                placeholder="Enter your message"
                className="border mt-3 rounded-md p-2 px-3 border-black"
              />
              <button
                onClick={() => handleSubmitReview(userName, userReview)}
                className="bg-red-500 rounded-md mt-2 p-2 text-white hover:bg-red-800"
              >
                submit
              </button>
            </div>
          ) : (
            <div className="border p-1">
              <Reviews id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
