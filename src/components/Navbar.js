import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* NavMenu */}
        <div className="menu-container item">
          <img src="./assets/shared/tablet/icon-hamburger.svg" alt="menu" />
        </div>

        {/*  Logo  */}
        <div className="logo-container">
          <img src="./assets/shared/desktop/logo.svg" alt="audiophile" />
        </div>

        {/* Desktop NavLinks */}
        <div className="desktop-links">
          <Link to="/">
            <h5> Home</h5>
          </Link>
          <Link to="/speakers">
            <h5> Speakers</h5>
          </Link>
          <Link to="/earphones">
            <h5> Earphones</h5>
          </Link>
          <Link to="/headphones">
            <h5> Headphones</h5>
          </Link>
          <Link to="/checkout">
            <h5> Checkout</h5>
          </Link>
        </div>

        {/*  Cart  */}
        <div className="cart-container item">
          <img src="./assets/shared/desktop/icon-cart.svg" alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
