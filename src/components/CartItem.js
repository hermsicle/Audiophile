import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/products/productSlice";

const CartItem = ({ item, price, quantity, summary }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(item));
  };

  const handleDecrement = () => {
    dispatch(decrement(item));
  };

  return (
    <div className="all-items-container">
      <div className="cart-items-wrapper">
        <div className="item-box">
          <img
            src={`./assets/cart/image-${item}.jpg`}
            alt="img"
            className="image-icon"
          />
          <div className="item-name-price">
            <h6> {item} </h6>
            <p className="price"> $ {price} </p>
          </div>
        </div>
        {summary ? (
          <div className="quantity-summary">
            <p> x {quantity}</p>
          </div>
        ) : (
          <div className="quantity">
            <button onClick={handleDecrement}> - </button>
            <input type="text" placeholder={quantity} disabled />
            <button onClick={handleIncrement}> + </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
