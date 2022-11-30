/** @format */

import "./App.css";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Cart from "./Component/Cart";
import data from "./Data";

function App() {
  //Parent Component of the Shoping cart.
  return (
    <>
      <Header />
      <div className='row'>
        <Main products={data} />
        {/*We pass productlist from data.jd file as an prop to the main.js file*/}
        <Cart />
      </div>
    </>
  );
}

export default App;

