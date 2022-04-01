/* ================== HEADER BUTTON ================== */

/* === GENERAL IMPORT === */
import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

/* === STYLE IMPORT === */
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const [btnIsHighlighted, setBtnHighlight] = useState(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderButton;
