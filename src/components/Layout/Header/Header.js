/* ================== HEADER ================== */

/* === GENERAL IMPORT === */
import React from "react";

/* === COMPONENT IMPORT === */
import HeaderButton from "./HeaderButton";

/* === STYLE IMPORT === */
import classes from "./Header.module.css";
import mealImg from "../../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MEAL TIME</h1>
        <HeaderButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="Table of Food (Header)" />
      </div>
    </React.Fragment>
  );
};

export default Header;
