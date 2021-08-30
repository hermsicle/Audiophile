import React from "react";

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

        {/*  Cart  */}
        <div className="cart-container item">
          <img src="./assets/shared/desktop/icon-cart.svg" alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
