import React from "react";
import {
  AboutContainer,
  ItemsContainer,
  FooterContainer,
} from "../../containers";
import { ProductDetails, Gallary, Upsale } from "../../components";
import data from "../../constants/headphones/xx99mark2.json";

function Xx99mark2(props) {
  return (
    <div>
      <ProductDetails
        image={data.imageMobile}
        imageTablet={data.imageTablet}
        imageDesktop={data.imageDesktop}
        name={data.title}
        description={data.description}
        price={data.price}
        features={data.features[0].feature}
        features2={data.features[1].feature}
        inTheBox={data.inTheBox}
        payload={data.payload}
      />
      <Gallary
        image1={data.gallary.image1}
        image2={data.gallary.image2}
        image3={data.gallary.image3}
      />
      <Upsale itemsToConsider={data.itemsToConsider} />

      <ItemsContainer />
      <AboutContainer />
      <FooterContainer />
    </div>
  );
}

export default Xx99mark2;
