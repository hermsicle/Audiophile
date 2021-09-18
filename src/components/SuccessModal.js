import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem } from "../components/";
import { removeAll } from "../store/products/productSlice";
import { useDispatch } from "react-redux";

function SuccessModal() {
  const history = useHistory();
  const allCartItems = useSelector((state) => state.products);
  const cartTotal = useSelector((state) => state.products.total.current);

  const TAX = 50;
  const VAT = Math.floor(cartTotal * 0.2);
  const GRAND_TOTAL = cartTotal + TAX + VAT;
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
          </div>
          <div className="right-container">
            <h5 className="title"> Grand Total </h5>
            <p className="total"> ${GRAND_TOTAL} </p>
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
