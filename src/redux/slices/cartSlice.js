import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQty++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + Number(item.price) * Number(item.quantity);
      }, 0);
    },
    minusItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
    
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice -= item.price;
          state.totalQty--;
          state.totalAmount = state.cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);
        } else {
          //state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        }
    
       
      }
    },
    plusItem:(state,action)=>{
      const itemId = action.payload;
      const item = state.cartItems.find((item)=>item.id === itemId);
      if(item){
        item.quantity++;
        item.totalPrice+=item.price;
        state.totalQty++;
        state.totalAmount = state.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const exist = state.cartItems.find((item) => item.id === id);

      if (exist) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalAmount = state.cartItems.reduce((total, item) => {
          return total + Number(item.price) * Number(item.quantity);
        }, 0);
        state.totalQty = state.totalQty - exist.quantity;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
