import React from "react";
import { Landing } from "../components";
import {
  ItemsContainer,
  Zx9Container,
  Zx7Container,
  Yx1Container,
  AboutContainer,
  FooterContainer,
} from "../containers";

const Home = () => {
  return (
    <>
      <Landing />
      <ItemsContainer />
      <Zx9Container />
      <Zx7Container />
      <Yx1Container />
      <AboutContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
