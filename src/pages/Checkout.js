import React from "react";
import { CheckoutForm, Summary, FooterContainer } from "../containers";
import { SuccessModal } from "../components";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const history = useHistory();
  const checkoutItems = useSelector((state) => state.products.total.items);

  return (
    <>
      {checkoutItems === 0 ? (
        <Redirect to="/" />
      ) : (
        <>
          <div className="checkout-page">
            <div className="checkout-inner">
              <button className="button-4" onClick={() => history.goBack()}>
                Go Back
              </button>
              <div className="checkout-wrapper">
                <CheckoutForm />
                <Summary />
              </div>
            </div>
          </div>
          <FooterContainer />
          {/* <SuccessModal /> */}
        </>
      )}
    </>
  );
};

export default Checkout;
