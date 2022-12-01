/** @format */

import React from "react";

// In this file we shows the added item in cart.

const Cart = (props) => {
  const { onAdd, onRemove, cartItems } = props;

  const itemPrice = cartItems.reduce((a, c) => a + c.qnt * c.price, 0);
  const taxPrice = itemPrice * 0.18;
  const shippingPrice = itemPrice + taxPrice > 10000 ? 50 : 0;
  const totalPrice = itemPrice + shippingPrice + taxPrice;

  return (
    <div className='block col2'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            <strong>Cart is Empty</strong>
          </div>
        )}
        {cartItems.map((listSummary) => (
          <div className='row' key={listSummary}>
            <div className='col 2'>{listSummary.name}</div>
            <div className='col2'>
              <button onClick={() => onAdd(listSummary)} className='add'>
                +
              </button>
              <button onClick={() => onRemove(listSummary)} className='remove'>
                -
              </button>
            </div>
            <div>
              {listSummary.qnt} X {listSummary.price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className='row'>
              <div className='co1'>Item Price</div>
              <div className='col2 text-right'>{itemPrice}</div>
            </div>
            <div className='row'>
              <div className='co1'>Tax Price</div>
              <div className='col2 text-right'>{taxPrice}</div>
            </div>
            <div className='row'>
              <div className='co1'>Shipping Price</div>
              <div className='col2 text-right'>{shippingPrice}</div>
            </div>
            <div className='row'>
              <div className='co1'>Total Price</div>
              <div className='col2 text-right'>{totalPrice}</div>
            </div>
            <hr />
            <div className='button center'>Checkout</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

