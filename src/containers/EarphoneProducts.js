import React from "react";
import { Product } from "../components";
import earphones from "../constants/earphones.json";

const EarphoneProducts = () => {
  return (
    <div>
      {earphones.map((item, i) => (
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

export default EarphoneProducts;
