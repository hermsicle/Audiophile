import React from "react";
import { useHistory } from "react-router-dom";

function SuccessModal(props) {
  const history = useHistory();

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
            <div className="items-info">
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
            </div>
          </div>
          <div className="right-container">
            <h5 className="title"> Grand Total </h5>
            <p className="total"> $ </p>
          </div>
        </div>
        <button className="button-1" onClick={() => history.push("/")}>
          Back to home
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
