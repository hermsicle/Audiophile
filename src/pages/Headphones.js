import React from "react";
import { Banner } from "../components";
import {
  HeadphoneProducts,
  ItemsContainer,
  AboutContainer,
  FooterContainer,
} from "../containers";

const Headphones = () => {
  return (
    <>
      <Banner title="headphones" />
      <HeadphoneProducts />
      <ItemsContainer />
      <AboutContainer />
      <FooterContainer />
    </>
  );
};

export default Headphones;
