import React from "react";

function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <div className="billing-details">
        <h5 className="title">Billing details</h5>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">Name</p>
            <input type="text" placeholder="Alexei Ward" className="input" />
          </div>
          <div className="input-box small">
            <p className="label">Email Address</p>
            <input
              type="text"
              placeholder="Alexei@gmail.com"
              className="input"
            />
          </div>
        </div>
        <div className="input-box">
          <p className="label">Phone Number</p>
          <input type="text" placeholder="+1 202-555-0136" className="input" />
        </div>
      </div>

      <div className="shipping-info">
        <h5 className="title"> Shipping info</h5>
        <div className="input-box wide">
          <p className="label">Address</p>
          <input type="text" placeholder="+1 202-555-0136" className="input" />
        </div>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">Zip Code</p>
            <input type="text" placeholder="100001" className="input" />
          </div>
          <div className="input-box small">
            <p className="label">City</p>
            <input type="text" placeholder="New York" className="input" />
          </div>
        </div>
        <div className="input-box">
          <p className="label">Country</p>
          <input type="text" placeholder="United States" className="input" />
        </div>
      </div>

      <div className="payment-details">
        <h5 className="title">Payment details</h5>
        <div className="flex-row">
          <p className="label payment">Payment Method</p>
          <div className="payment-options">
            <div className="input-box payment">
              <input type="radio" className="radio" />
              <p className="label">e-Money</p>
            </div>
            <div className="input-box payment">
              <input type="radio" className="radio" />
              <p className="label">Cash on Delivery</p>
            </div>
          </div>
        </div>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">e-Money-Number</p>
            <input type="text" placeholder="8888888" className="input" />
          </div>
          <div className="input-box small">
            <p className="label">e-Money Pin</p>
            <input type="text" placeholder="6888" className="input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
