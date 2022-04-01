/* ================== MEALS ITEM ================== */

/* === GENERAL IMPORT === */
import React, { useContext } from "react";

/* === COMPONENT IMPORT === */
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

/* === STYLE IMPORT === */
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const mealPriceFormatted = `$${props.mealPrice.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.mealTitle,
      amount: amount,
      price: props.mealPrice,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealTitle}</h3>
        <div className={classes.description}>{props.mealDesc}</div>
        <div className={classes.price}>{mealPriceFormatted}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
