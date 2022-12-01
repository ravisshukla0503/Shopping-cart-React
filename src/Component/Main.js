/** @format */

import React from "react";
import Product from "./Product";

// Main Section of the shopping cart where from we pass Product list as an prop to the product file.

const Main = (props) => {
  const { items, onAdd, onRemove, cartItems } = props;

  return (
    <div className='block col1'>
      <h2>Product</h2>
      <div className='row'>
        {items.product.map((item) => (
          <Product
            key={item.id}
            lists={item}
            productList={cartItems.find((x) => x.id === item.id)}
            onAdd={onAdd}
            onRemove={onRemove}></Product>
        ))}
      </div>
    </div>
  );
};

export default Main;

