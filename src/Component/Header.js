/** @format */
// header section of the shopping cart

import React from "react";

const Header = () => {
  return (
    <div className='row center block'>
      <div>
        <a href='#/Shoping Cart'>
          <h2>Shoping Cart</h2>
        </a>
      </div>
      <div>
        <a href='#/Cart'>Cart</a> <a href='#/SignIn'>Sign-In</a>
      </div>
    </div>
  );
};

export default Header;

