import React from "react";
import { CheckoutForm } from "../containers";

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-inner">
        <button className="button-3"> Go Back </button>
        <div className="checkout-wrapper">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
