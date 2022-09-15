import React, { Fragment } from "react";

import mealsImg from "./../assets/foodmeals.jpg";
import styled from "./header.module.css";
import HeaderCarts from "./HeaderCarts";
const Header = () => {
  return (
    <Fragment>
      <header className={styled.header}>
        <h1>FoodMeals</h1>
        <HeaderCarts />
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImg} alt="food-meals" />
      </div>
    </Fragment>
  );
};

export default Header;
