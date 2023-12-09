import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
const ProductCard = ({ info }) => {
  // console.log(info)
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(
      cartActions.addItem({
        id: info?.id,
        title: info.title,
        price: info.price,
        image: info.image,
      })
    );
    toast.success("product added to cart", { icon: "😁😁" });
  }
  return (
    <div className="">
      <Toaster position="top-right" />
      <div
        className=" hover:scale-105 cursor-pointer border-2 shadow-xl
        bg-slate-100 rounded-lg max-w-sm md:w-[300px]  h-[400px] m-3  
    flex flex-col justify-center items-center"
      >
        <div className=" h-1/2 ">
          <img
            src={info?.image}
            className=" h-full w-full p-1 rounded-md object-cover"
          />
        </div>
        <div className=" text-center font-medium ">
          <Link to={`/shop/${info.id}`}>{info?.title}</Link>
        </div>
        <div className="flex items-center justify-center ">
          <p>${info?.price}</p>
          <button onClick={addToCart} className=" w-fit bg-slate-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
