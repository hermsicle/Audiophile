import React from "react";
import { Banner } from "../components";
import {
  EarphoneProducts,
  ItemsContainer,
  AboutContainer,
  FooterContainer,
} from "../containers";

const Earphones = () => {
  return (
    <>
      <Banner title="Earphones" />
      <EarphoneProducts />
      <ItemsContainer />
      <AboutContainer />
      <FooterContainer />
    </>
  );
};

export default Earphones;
