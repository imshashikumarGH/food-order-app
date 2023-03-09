import React, { useState } from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/store/CartProvider";

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
    <CartProvider>
      {cartIsShown && <Cart onHideCart ={hideCartHandler}/>}
      <Header onShownCart = {shownCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
