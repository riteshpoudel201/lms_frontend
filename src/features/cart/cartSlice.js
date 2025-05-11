import { createSlice } from "@reduxjs/toolkit";
import {} from "redux-persist";

const initialState = {
  cartItems: [],
};
const bookSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },

    deleteBookFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart?._id !== action.payload
      );
    },

    clearCart: (state, action) => {
      state.cartItems = [];
    //   persisitor.purge();
    },
  },
});

const { reducer, actions } = bookSlice;

export const { setCartItems, deleteBookFromCart, clearCart } = actions;
export default reducer;
