import React from "react";
import { Banner } from "../components";
import {
  SpeakerProducts,
  ItemsContainer,
  AboutContainer,
  FooterContainer,
} from "../containers";

const Speakers = () => {
  return (
    <>
      <Banner title="speakers" />
      <SpeakerProducts />
      <ItemsContainer />
      <AboutContainer />
      <FooterContainer />
    </>
  );
};

export default Speakers;
