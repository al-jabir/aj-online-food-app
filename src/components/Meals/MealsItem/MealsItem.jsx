import React from "react";
import classes from "./MealsItem.module.css";
const MealsItem = ({ pirce, name, description }) => {
  const price = `${pirce.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealsItem;
