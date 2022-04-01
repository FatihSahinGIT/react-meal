/* ================== MEALS ================== */

/* === GENERAL IMPORT === */
import React from "react";

/* === COMPONENTS IMPORT === */
import MealsAvailable from "./MealsAvailable";
import MealsSummary from "./MealsSummary";

/* === STYLE IMPORT === */

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <MealsAvailable />
    </React.Fragment>
  );
};

export default Meals;
