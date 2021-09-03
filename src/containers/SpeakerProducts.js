import React from "react";
import { Product } from "../components";
import speakers from "../constants/speakers.json";

const SpeakerProducts = () => {
  return (
    <div>
      {speakers.map((item, i) => (
        <Product
          image={item.image}
          imageDesktop={item.imageDesktop}
          title={item.title}
          description={item.description}
          key={item.id}
          reverse={item.reverse}
        />
      ))}
    </div>
  );
};

export default SpeakerProducts;
