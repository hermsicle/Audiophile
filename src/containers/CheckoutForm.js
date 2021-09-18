import React, { useState } from "react";

function CheckoutForm({ setField, formErrors }) {
  const paymentOptions = [{ type: "Debit" }, { type: "Credit" }];
  const [current, setCurrent] = useState(0);
  return (
    <form className="checkout-form">
      <h2>Checkout</h2>
      <div className="billing-details">
        <h5 className="title">Billing details</h5>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">Name</p>
            <input
              type="text"
              className="input"
              onChange={(e) => setField("name", e.target.value)}
            />
            {<p className="error">{formErrors.name}</p>}
          </div>
          <div className="input-box small">
            <p className="label">Email Address</p>
            <input
              type="text"
              className="input"
              onChange={(e) => setField("email", e.target.value)}
            />
            {<p className="error">{formErrors.email}</p>}
          </div>
        </div>
        <div className="input-box">
          <p className="label">Phone Number</p>
          <input
            type="number"
            className="input"
            onChange={(e) => setField("phone", e.target.value)}
          />
          {<p className="error">{formErrors.phone}</p>}
        </div>
      </div>

      <div className="shipping-info">
        <h5 className="title"> Shipping info</h5>
        <div className="input-box wide">
          <p className="label">Address</p>
          <input
            type="text"
            className="input"
            onChange={(e) => setField("address", e.target.value)}
          />
          {<p className="error">{formErrors.address}</p>}
        </div>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">Zip Code</p>
            <input
              type="number"
              className="input"
              onChange={(e) => setField("zipCode", e.target.value)}
            />
            {<p className="error">{formErrors.zipCode}</p>}
          </div>
          <div className="input-box small">
            <p className="label">City</p>
            <input
              type="text"
              className="input"
              onChange={(e) => setField("city", e.target.value)}
            />
            {<p className="error">{formErrors.city}</p>}
          </div>
        </div>
        <div className="input-box">
          <p className="label">Country</p>
          <input
            type="text"
            className="input"
            onChange={(e) => setField("country", e.target.value)}
          />
          {<p className="error">{formErrors.country}</p>}
        </div>
      </div>

      <div className="payment-details">
        <h5 className="title">Payment details</h5>
        <div className="flex-row">
          <p className="label payment">Payment Method</p>
          {/* Only have one active payment option */}
          <div className="payment-options">
            {paymentOptions.map((option, i) => {
              return (
                <div
                  className="input-box payment"
                  key={i}
                  onClick={() => setCurrent(i)}
                >
                  <input
                    type="radio"
                    className="radio"
                    checked={current === i && true}
                    onChange={() => setCurrent(i)}
                  />
                  <p className="label"> {option.type} </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-row">
          <div className="input-box">
            <p className="label">Card Number</p>
            <input
              type="number"
              placeholder="341472225009025"
              className="input"
              onChange={(e) => setField("cardNumber", e.target.value)}
            />
            {<p className="error">{formErrors.cardNumber}</p>}
          </div>
          <div className="input-box small">
            <p className="label">Card Pin</p>
            <input
              type="number"
              placeholder="688"
              className="input"
              onChange={(e) => setField("cardPin", e.target.value)}
            />
            {<p className="error">{formErrors.cardPin}</p>}
          </div>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
