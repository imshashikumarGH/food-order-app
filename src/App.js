import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

function App() {
  //to keep the backdrop reuseable we are using props to pass a multiple level instead of context
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onHideCart ={hideCartHandler}/>}
      <Header onShownCart = {shownCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
