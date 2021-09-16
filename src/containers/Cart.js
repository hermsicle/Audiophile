import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../components/";

function Cart({ toggleCart, setToggleCart }) {
  const history = useHistory();
  const dispatch = useDispatch();

  // Get all items from redux
  const allCartItems = useSelector((state) => {
    return state.products;
  });

  const cartTotal = useSelector((state) => state.products.total.current);

  const xx99Mark2 = useSelector(
    (state) =>
      state.products.xx99mark2.quantity * state.products.xx99mark2.price
  );
  console.log(xx99Mark2);

  return (
    <>
      <div className="cart-overlay" onClick={() => setToggleCart(false)}></div>

      <div className="cart-modal">
        {
          // If no cart Items prompt user to add items to cart, else display cart
        }
        <>
          <div className="flex-row">
            <h5>Cart ( )</h5>
            <button className="remove-all-button">Remove All</button>
          </div>
          {/* Check to see if inCart is TRUE, if it is render out the cart items*/}
          {Object.keys(allCartItems).map((item, i) => {
            const isInCart = allCartItems[item].cart;
            if (isInCart === true) {
              return (
                <div key={i} className="all-items-container-wrapper">
                  <CartItem
                    item={item}
                    price={allCartItems[item].price}
                    quantity={allCartItems[item].quantity}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className="total flex-row">
            <p className="text"> Total </p>
            <p className="price"> $ {cartTotal} </p>
          </div>
          <button
            className="button-1"
            onClick={() => {
              history.push("/checkout");
              setToggleCart(!toggleCart);
            }}
          >
            Check Out
          </button>
        </>
      </div>
    </>
  );
}

export default Cart;
