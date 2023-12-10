import React, { useEffect, useState } from "react";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
const Cart = () => {
  const [cartItems, setCartItems] = useState({});
  const [cartSearcher, setcartSearcher] = useState([]);
  const cartItem = useSelector((store) => store.cart.cartItems);

  console.log(cartItem);
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

  return (
    <div className="h-[80vh] flex justify-center">
      <div className="w-[80vw]">
        <table className=" border w-full  table table-auto">
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
            {(!cartItem) ? (
              <div>load</div>
            ) : (
              cartItem.map((item) => {
                return <Tr item={item} key={item.id} />;
              })
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{cartItem?.totalAmount}</td>
            </tr>
          </tfoot>
        </table>
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
        onClick={handleDelete(item.id)}
        className="bg-red-500 rounded-md cursor-pointer flex justify-center"
      >
        Delete
      </td>
    </tr>
  );
}
