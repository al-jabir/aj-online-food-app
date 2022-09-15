import React, { Fragment } from "react";

import mealsImg from "../../assets/foodmeals.jpg";
import styled from "./header.module.css";
const Header = () => {
  return (
    <Fragment>
      <header className={styled.headers}>
        <h1>FoodMeals</h1>
        <button>card</button>
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImg} alt="food-meals" />
      </div>
    </Fragment>
  );
};

export default Header;
