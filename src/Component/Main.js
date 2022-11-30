/** @format */

import React from "react";
import Product from "./Product";

// Main Section of the shopping cart where from we pass Product list as an prop to the product file.

const Main = (props) => {  
  return (
    <div className='block col1'>
      <h2>Product</h2>
      <div className='row'>
        {props.products.product.map((item) => (
          <Product key={item.id} product={item}></Product>
        ))}
      </div>
    </div>
  );
};

export default Main;

