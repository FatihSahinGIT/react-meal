/* ================== HEADER ================== */

/* === GENERAL IMPORT === */
import React, { useState } from "react";

/* === COMPONENTS IMPORT === */
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

/* === STYLE IMPORT === */

const App = () => {
  const [cartShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />;
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
