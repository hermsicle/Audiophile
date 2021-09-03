import React from "react";
import { Product } from "../components";
import headphones from "../constants/headphones.json";

const HeadphoneProducts = () => {
  return (
    <div>
      {headphones.map((item, i) => (
        <Product
          image={item.image}
          imageDesktop={item.imageDesktop}
          title={item.title}
          description={item.description}
          key={item.id}
          reverse={item.reverse}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default HeadphoneProducts;
