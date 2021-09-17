import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../components/";
import { removeAll, grandTotal } from "../store/products/productSlice";

function Cart({ toggleCart, setToggleCart }) {
  const history = useHistory();
  const dispatch = useDispatch();

  // Get all items from redux
  const allCartItems = useSelector((state) => {
    return state.products;
  });

  // Get total cart items
  const totalCartItems = useSelector((state) => {
    return state.products.total.items;
  });
  console.log(totalCartItems);

  const cartTotal = useSelector((state) => state.products.total.current);
  const totalItems = useSelector((state) => state.products.total.items);

  return (
    <>
      <div className="cart-overlay" onClick={() => setToggleCart(false)}></div>

      <div className="cart-modal">
        {
          // If no cart Items prompt user to add items to cart, else display cart
          totalItems !== 0 ? (
            <>
              <div className="flex-row">
                <h5>Cart ({totalItems})</h5>
                <button
                  className="remove-all-button"
                  onClick={() => dispatch(removeAll())}
                >
                  Remove All
                </button>
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
                  dispatch(grandTotal());
                }}
              >
                Check Out
              </button>
            </>
          ) : (
            <>
              <h5 style={{ margin: "1rem auto 2rem" }}>No Items in cart</h5>
              <button className="button-1" onClick={() => setToggleCart(false)}>
                Coninue Shopping
              </button>
            </>
          )
        }
      </div>
    </>
  );
}

export default Cart;
