import React, { useEffect, useState } from "react";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  const [cartSearcher, setcartSearcher] = useState([]);
  const cartItem = useSelector((store) => store.cart.cartItems);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const totalQty = useSelector((store) => store.cart.totalQty);

  console.log(cartItem);
  console.log(totalAmount);
  useEffect(() => {
    getData();
    getCartIds();
  }, []);
  async function getData() {
    const data = ref(db, "products/");
    onValue(data, (snapshot) => {
      const data = snapshot.val();
      setCartItems(data);
    });
  }
  async function getCartIds() {
    const free = await cartItem.filter((item) => {
      cartItem.id === item;
    });
    console.log(free);
  }
  //console.log(cartItems);
  if (cartItem.length === 0) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        No items in cart 😪
      </div>
    );
  }
  return (
    <div className="h-[80vh] flex justify-center">
      <div className="w-[80vw]">
        <table className="p-4 border w-full  table table-auto">
          <thead className=" bg-slate-700 text-white">
            <tr className=" table-row h-5">
              <td scope="col">Product</td>
              <td scope="col">Name</td>
              <td scope="col">Price $</td>
              <td scope="col">Qty</td>
              <td scope="col">Delete</td>
            </tr>
          </thead>
          <tbody>
            {!cartItem ? (
              <div>load</div>
            ) : (
              cartItem.map((item) => {
                return <Tr item={item} key={item.id} />;
              })
            )}
          </tbody>
          <tfoot>
            <tr className="border-2">
              <td colSpan={2}>Total</td>
              <td>{totalAmount}</td>
              <td>{totalQty}</td>
            </tr>
          </tfoot>
        </table>
        <div className="flex mt-2">
          <Link to="/shop">
            <button className="me-3 bg-red-500 p-1 rounded-md">
              Contiue shopping
            </button>
          </Link>
          <Link to="/checkout">
            <button className=" bg-green-800  p-1 rounded-md text-emerald-50">checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

function Tr({ item }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(cartActions.deleteItem(id));
  }
  return (
    <tr className="" key={item.id}>
      <td>
        <img src={item.image[0]} className="h-10" alt="Product" />
      </td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td
        onClick={() => handleDelete(item.id)}
        className="bg-red-500 rounded-md cursor-pointer flex justify-center"
      >
        Delete
      </td>
    </tr>
  );
}
