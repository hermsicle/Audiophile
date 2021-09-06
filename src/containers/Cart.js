import React from "react";
import { useHistory, ustHistory } from "react-router-dom";

function Cart({ toggleCart, setToggleCart }) {
  const history = useHistory();
  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="flex-row">
          <h5>Cart (3)</h5>
          <button className="remove-all-button">Remove All</button>
        </div>
        {/* This will be mapped out from our state of cart */}
        <div className="all-items-container">
          <div className="cart-items-wrapper">
            <div className="item-box">
              <img
                src="./assets/cart/image-yx1-earphones.jpg"
                alt="img"
                className="image-icon"
              />
              <div className="item-name-price">
                <h6> XX99 MK || </h6>
                <p className="price"> $ 888 </p>
              </div>
            </div>
            <div className="quantity">
              <button> - </button>
              <input type="text" placeholder="1" />
              <button> + </button>
            </div>
          </div>

          <div className="cart-items-wrapper">
            <div className="item-box">
              <img
                src="./assets/cart/image-yx1-earphones.jpg"
                alt="img"
                className="image-icon"
              />
              <div className="item-name-price">
                <h6> XX99 MK || </h6>
                <p className="price"> $ 888 </p>
              </div>
            </div>
            <div className="quantity">
              <button> - </button>
              <input type="text" placeholder="1" />
              <button> + </button>
            </div>
          </div>
        </div>

        <div className="total flex-row">
          <p className="text"> Total </p>
          <p className="price"> $ 888 </p>
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
      </div>
    </div>
  );
}

export default Cart;
