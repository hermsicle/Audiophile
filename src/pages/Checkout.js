import React, { useState } from "react";
import { CheckoutForm, Summary, FooterContainer } from "../containers";
import { SuccessModal } from "../components";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const history = useHistory();
  const checkoutItems = useSelector((state) => state.products.total.items);

  const [formInputs, setFormInputs] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setField = (key, value) => {
    setFormInputs({
      ...formInputs,
      [key]: value,
    });

    // Check if there is an error, if there is remove it
    if (formErrors[key]) {
      setFormErrors({
        ...formErrors,
        [key]: null,
      });
    }
  };

  // Function to check form validations
  const handleFormErrors = () => {
    const {
      address,
      city,
      country,
      cardNumber,
      cardPin,
      email,
      name,
      phone,
      zipCode,
    } = formInputs;
    const formErrors = {};
    const regexAtoZ = /[A-z]/;
    const CANNOT_BE_BLANK = "Cannot be blank";
    const INVALID = "Please fill correctly";

    // Address must NOT be longer than 50 characters.
    if (!address || address === "") {
      formErrors.address = CANNOT_BE_BLANK;
    } else if (address.length >= 100) {
      formErrors.address = INVALID;
    }

    // city must not be longer than 50 characters
    if (!city || city === "") {
      formErrors.city = CANNOT_BE_BLANK;
    } else if (city.length >= 50 || city.length <= 5) {
      formErrors.city = INVALID;
    } else if (!city.match(regexAtoZ)) {
      formErrors.city = INVALID;
    }

    // country must not be longer than 30 characters
    if (!country || country === "") {
      formErrors.country = CANNOT_BE_BLANK;
    } else if (country.length >= 30 || country.length <= 5) {
      formErrors.country = INVALID;
    } else if (!country.match(regexAtoZ)) {
      formErrors.country = INVALID;
    }
    // card number must ONLY be 15 characters
    if (!cardNumber || cardNumber.length === "") {
      formErrors.cardNumber = CANNOT_BE_BLANK;
    } else if (cardNumber.toString().length !== 15) {
      formErrors.cardNumber = INVALID;
    }

    // card pin only 3 characters
    if (!cardPin || cardPin === "") {
      formErrors.cardPin = CANNOT_BE_BLANK;
    } else if (cardPin.toString().length !== 3) {
      formErrors.cardPin = INVALID;
    }

    // email must be a valid email, cant be longer than 75 char
    if (!email || email === "") {
      formErrors.email = CANNOT_BE_BLANK;
    } else if (email.length >= 100) {
      formErrors.email = INVALID;
    } else if (!email.includes("@") || !email.includes(".com")) {
      formErrors.email = INVALID;
    }

    // name must not be longer than 30 chars and no numbers
    if (!name || name === "") {
      formErrors.name = CANNOT_BE_BLANK;
    } else if (name.length >= 30) {
      formErrors.email = INVALID;
    } else if (!name.match(regexAtoZ)) {
      formErrors.name = INVALID;
    }

    // phone must be 9 - 10 digits numbers only
    if (!phone || phone === "") {
      formErrors.phone = CANNOT_BE_BLANK;
    } else if (phone.toString().length < 9 || phone.toString().length > 11) {
      formErrors.phone = INVALID;
    }

    // zipcode must only 5 digits only and only numbers
    if (!zipCode || !zipCode === "") {
      formErrors.zipCode = CANNOT_BE_BLANK;
    } else if (zipCode.toString().length !== 5) {
      formErrors.zipCode = INVALID;
    }

    return formErrors;
  };

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
                <CheckoutForm setField={setField} formErrors={formErrors} />
                <Summary
                  formInputs={formInputs}
                  handleFormErrors={handleFormErrors}
                  setFormErrors={setFormErrors}
                  setIsFormValid={setIsFormValid}
                />
              </div>
            </div>
          </div>
          <FooterContainer />
          {isFormValid && <SuccessModal />}
        </>
      )}
    </>
  );
};

export default Checkout;
