import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
const ProductCard = ({ info }) => {
  // console.log(info)
  const navigate=useNavigate()
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

  function handleToDetails(id){
    navigate(id)
  }
  return (
    <div 
    className="">
      <Toaster position="top-right" />
      <div
      onClick={()=>handleToDetails(info?.id)}
        className=" hover:scale-105 cursor-pointer border-2 shadow-xl
        bg-slate-100 rounded-lg max-w-sm md:w-[300px]  h-[400px] m-3  
    flex flex-col justify-center items-center"
      >
        <div className=" h-1/2 ">
          <Link to={`/shop/${info.id}`}>
          <img
            src={info?.image}
            className=" h-full w-full p-1 rounded-md object-cover"
          /></Link>
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
