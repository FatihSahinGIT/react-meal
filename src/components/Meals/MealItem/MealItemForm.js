/* ================== MEALS ITEM FORM ================== */

/* === GENERAL IMPORT === */
import React, { useRef, useState } from "react";

/* === COMPONENT IMPORT === */
import Input from "../../UI/Input";

/* === STYLE IMPORT === */
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        inputLabel="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>VALID AMOUNT PLEASE</p>}
    </form>
  );
};

export default MealItemForm;
