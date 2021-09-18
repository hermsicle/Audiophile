import React from "react";
import { CartItem } from "../components/";
import { useSelector } from "react-redux";

function Summary({ handleFormErrors, setFormErrors, setIsFormValid }) {
  const allCartItems = useSelector((state) => state.products);
  const cartTotal = useSelector((state) => state.products.total.current);

  const TAX = 50;
  const VAT = Math.floor(cartTotal * 0.2);
  const GRAND_TOTAL = cartTotal + TAX + VAT;

  const handleSubmit = () => {
    // console.log(formInputs);
    const formErrors = handleFormErrors();
    // console.log(formErrors);

    // Check to see if form error values > 0
    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
    } else {
      setIsFormValid(true);
    }
  };

  return (
    <div className="summary-container">
      <h2> Summary </h2>
      <div className="cart-items">
        {/* This will be where we map out cart items */}
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
      <div className="total-container">
        <div className="box">
          <p className="title">Total</p>
          <p className="price"> ${cartTotal} </p>
        </div>
        <div className="box">
          <p className="title">Shipping</p>
          <p className="price"> ${TAX}</p>
        </div>
        <div className="box">
          <p className="title">Vat (Included) </p>
          {/* VAT is 20% OF total */}
          <p className="price"> $ {VAT} </p>
        </div>
        <div className="box total">
          <p className="title">Grand Total</p>
          <p className="price total"> ${GRAND_TOTAL} </p>
        </div>
        <button className="button-1" onClick={handleSubmit}>
          Continue & Pay
        </button>
      </div>
    </div>
  );
}

export default Summary;
