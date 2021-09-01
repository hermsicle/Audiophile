import React, { useState } from "react";
import { Link } from "react-router-dom";

const FooterContainer = () => {
  const [fbActive, setFbActive] = useState(false);
  const [twActive, setTwActive] = useState(false);
  const [igActive, setIgActive] = useState(false);
  return (
    <footer className="footer-container">
      <div className="footer-inner-wrapper">
        <div className="footer-upper">
          <div className="logo"></div>
          <div className="footer-nav-container">
            <Link to="/home">
              <h5> Home </h5>
            </Link>
            <Link to="/headphones">
              <h5> Headphones </h5>
            </Link>
            <Link to="/speakers">
              <h5> Speakers </h5>
            </Link>
            <Link to="/earphones">
              <h5> Earphones </h5>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-content">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex-row">
            <p className="copyright"> Copyright 2021. All Rights Reserved</p>
            <div className="social-link">
              <div
                className={fbActive ? "facebook active" : "facebook"}
                onMouseEnter={() => setFbActive(true)}
                onMouseLeave={() => setFbActive(false)}
              ></div>
              <div
                className={twActive ? "twitter active" : "twitter"}
                onMouseEnter={() => setTwActive(true)}
                onMouseLeave={() => setTwActive(false)}
              ></div>
              <div
                className={igActive ? "instagram active" : "instagram"}
                onMouseEnter={() => setIgActive(true)}
                onMouseLeave={() => setIgActive(false)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
