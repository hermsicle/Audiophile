import React from "react";

function Summary(props) {
  return (
    <div className="summary-container">
      <h2> Summary </h2>
      <div className="cart-items">
        {/* This will be where we map out cart items */}
      </div>
      <div className="total-container">
        <div className="box">
          <p className="title">Total</p>
          <p className="price"> $ </p>
        </div>
        <div className="box">
          <p className="title">Shipping</p>
          <p className="price"> $ </p>
        </div>
        <div className="box">
          <p className="title">Vat (Included) </p>
          <p className="price"> $ </p>
        </div>
        <div className="box total">
          <p className="title">Grand Total</p>
          <p className="price total"> $ </p>
        </div>
        <button className="button-1"> Continue & Pay </button>
      </div>
    </div>
  );
}

export default Summary;
