import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem } from "../components/";
import { removeAll } from "../store/products/productSlice";
import { useDispatch } from "react-redux";

function SuccessModal(props) {
  const history = useHistory();
  const allCartItems = useSelector((state) => state.products);
  const grandTotal = useSelector((state) => state.products.total.grandTotal);

  const dispatch = useDispatch();

  return (
    <div className="success-modal-overlay">
      <div className="success-modal">
        {/* Check Image */}
        <img
          src="./assets/shared/desktop/check.svg"
          alt="img"
          className="check"
        />
        <h2 className="title"> Thank you for your order</h2>
        <p className="confirmation">
          You will receive an email confirmation shortly
        </p>
        <div className="items-container">
          <div className="left-container">
            {Object.keys(allCartItems).map((item, i) => {
              const isInCart = allCartItems[item].cart;
              if (isInCart === true) {
                return (
                  <div key={i} className="all-items-container-wrapper">
                    <CartItem
                      item={item}
                      price={allCartItems[item].price}
                      quantity={allCartItems[item].quantity}
                      summary={true}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
            {/* <div className="items-info">
              <img
                src="./assets/cart/image-xx59-headphones.jpg"
                alt="img"
                className="item-image"
              />
              <div className="item-price">
                <h5 className="name"> Item Name </h5>
                <p className="price-value"> $ Item Price </p>
              </div>
              <p className="quantity">x1</p>
            </div>
            <div className="other-items">
              <p> and # other item(s) </p>
            </div> */}
          </div>
          <div className="right-container">
            <h5 className="title"> Grand Total </h5>
            <p className="total"> ${grandTotal} </p>
          </div>
        </div>
        <button
          className="button-1"
          onClick={() => {
            dispatch(removeAll());
            history.push("/");
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
