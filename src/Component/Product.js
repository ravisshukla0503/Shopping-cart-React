/** @format */

import React from "react";

// In this file we display the cart.

const Product = (props) => {
  return (
    <div className='card'>
      <img
        className='small'
        src={props.product.image}
        alt={props.product.name}></img>
      <h3>{props.product.name}</h3>
      <div>${props.product.price}</div>
      <div>
        <button className='button' onClick={props.onAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

