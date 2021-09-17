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
    // Total
    total: {
      current: 0,
      items: 0,
      grandTotal: 0,
    },
  },
  reducers: {
    increment: (state, action) => {
      state[action.payload].quantity += 1;
      // Everytime we increment we want to increment total
      const xx99mark2 =
        state.xx99mark2.cart &&
        state.xx99mark2.quantity * state.xx99mark2.price;
      const xx99mark1 =
        state.xx99mark1.cart &&
        state.xx99mark1.quantity * state.xx99mark1.price;
      const xx59 = state.xx59.cart && state.xx59.quantity * state.xx59.price;
      const zx9 = state.zx9.cart && state.zx9.quantity * state.zx9.price;
      const zx7 = state.zx7.cart && state.zx7.quantity * state.zx7.price;
      const yx1 = state.yx1.cart && state.yx1.quantity * state.yx1.price;

      state.total.current = xx99mark2 + xx99mark1 + xx59 + zx9 + zx7 + yx1;
    },
    decrement: (state, action) => {
      state[action.payload].quantity -= 1;

      state.total.current -= state[action.payload].price;

      // Check if the current = 0
      if (state.total.current <= 0) {
        state.total.current = 0;
        state[action.payload].cart = false;
      }

      // If the items quantity is less than 1, set back to 1. Prevent negative numbers
      if (state[action.payload].quantity <= 0) {
        state[action.payload].quantity = 0;
      }
    },
    addToCart: (state, action) => {
      // Check to see if the item is NOT in the cart
      if (!state[action.payload].cart) {
        state[action.payload].cart = true;
        state.total.items += 1;
      }
      const xx99mark2 =
        state.xx99mark2.cart &&
        state.xx99mark2.quantity * state.xx99mark2.price;
      const xx99mark1 =
        state.xx99mark1.cart &&
        state.xx99mark1.quantity * state.xx99mark1.price;
      const xx59 = state.xx59.cart && state.xx59.quantity * state.xx59.price;
      const zx9 = state.zx9.cart && state.zx9.quantity * state.zx9.price;
      const zx7 = state.zx7.cart && state.zx7.quantity * state.zx7.price;
      const yx1 = state.yx1.cart && state.yx1.quantity * state.yx1.price;

      state.total.current = xx99mark2 + xx99mark1 + xx59 + zx9 + zx7 + yx1;
    },
    removeAll: (state) => {
      state.xx99mark2.cart = false;
      state.xx99mark1.cart = false;
      state.xx59.cart = false;
      state.zx9.cart = false;
      state.zx7.cart = false;
      state.yx1.cart = false;

      state.total.current = 0;
      state.total.items = 0;
    },
    grandTotal: (state) => {
      const TAX = 50;
      state.total.grandTotal =
        state.total.current + TAX + Math.floor(state.total.current * 0.2);
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  removeAll,
  getTotalItems,
  grandTotal,
} = productSlice.actions;

export default productSlice.reducer;
