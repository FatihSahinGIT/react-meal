/* ================== CARD ================== */

/* === GENERAL IMPORT === */
import React from "react";

/* === STYLE IMPORT === */
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
