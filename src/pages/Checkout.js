import React from "react";
import { CheckoutForm, Summary, FooterContainer } from "../containers";
import { SuccessModal } from "../components";

const Checkout = () => {
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-inner">
          <button className="button-4"> Go Back </button>
          <div className="checkout-wrapper">
            <CheckoutForm />
            <Summary />
          </div>
        </div>
      </div>
      <FooterContainer />
      {/* <SuccessModal /> */}
    </>
  );
};

export default Checkout;
