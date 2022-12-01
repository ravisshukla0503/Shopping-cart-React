/** @format */

import React from "react";

// In this file we display the cart.

const Product = (props) => {
  const { lists, onAdd, productList, onRemove } = props;

  return (
    <div className='card'>
      <img className='small' src={lists.image} alt={lists.name}></img>
      <h3>{lists.name}</h3>
      <div>${lists.price}</div>
      <div>
        {productList ? (
          <div>
            <button className='add' onClick={() => onAdd(lists)}>
              +
            </button>
            <span className='qtn'>{productList.qnt}</span>
            <button className='remove' onClick={() => onRemove(lists)}>
              -
            </button>
          </div>
        ) : (
          <button className='button' onClick={() => onAdd(lists)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

