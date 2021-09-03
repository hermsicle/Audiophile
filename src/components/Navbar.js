import React from "react";
import { Link } from "react-router-dom";
import { ItemsContainer } from "../containers";

const Navbar = ({ toggleNav, setToggleNav }) => {
  return (
    <>
      <header className="navbar-container">
        <div className="navbar-inner">
          {/* NavMenu */}
          <div
            className="menu-container item"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <img src="./assets/shared/tablet/icon-hamburger.svg" alt="menu" />
          </div>

          {/*  Logo  */}
          <div className="logo-container">
            <Link to="/">
              <img src="./assets/shared/desktop/logo.svg" alt="audiophile" />
            </Link>
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
      {toggleNav && <ItemsContainer navbar={true} />}
    </>
  );
};

export default Navbar;
