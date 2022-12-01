/** @format */

import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Cart from "./Component/Cart";
import data from "./Data";
import React, { useState } from "react";

function App() {
  //Parent Component of the Shoping cart.

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (items) => {
    const exist = cartItems.find((x) => x.id === items.id);

    if (exist) {
      const newItem = cartItems.map((x) =>
        x.id === items.id ? { ...exist, qnt: exist.qnt + 1 } : x
      );
      setCartItems(newItem);
    } else {
      const newItem = [...cartItems, { ...items, qnt: 1 }];
      setCartItems(newItem);
    }
  };

  const onRemove = (items) => {
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist.qnt === 1) {
      const newItem = cartItems.filter((x) => x.id !== items.id);
      setCartItems(newItem);
    } else {
      const newItem = cartItems.map((x) =>
        x.id === items.id ? { ...exist, qnt: exist.qnt - 1 } : x
      );
      setCartItems(newItem);
    }
  };

  return (
    <>
      <Header countItems={cartItems.length} />
      <div className='row'>
        <Main
          items={data}
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        />
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </>
  );
}

export default App;

