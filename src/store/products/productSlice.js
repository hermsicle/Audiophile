import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    //Headphones
    xx99mark2: {
      quantity: 1,
      price: 2999,
      cart: false,
    },
    xx99mark1: {
      quantity: 1,
      price: 1750,
      cart: false,
    },
    xx59: {
      quantity: 1,
      price: 899,
      cart: false,
    },
    //Speakers
    zx9: {
      quantity: 1,
      price: 4500,
      cart: false,
    },
    zx7: {
      quantity: 1,
      price: 3500,
      cart: false,
    },
    //Earphones
    yx1: {
      quantity: 1,
      price: 599,
      cart: false,
    },
  },
  reducers: {
    increment: (state, action) => {
      state[action.payload].quantity += 1;
    },
    decrement: (state, action) => {
      state[action.payload].quantity -= 1;
    },
    addToCart: (state, action) => {
      state[action.payload].cart = true;
    },
  },
});

export const { increment, decrement, addToCart } = productSlice.actions;

export default productSlice.reducer;
