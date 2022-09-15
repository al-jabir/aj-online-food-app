import React, { Fragment } from "react";

import mealsImg from "../../assets/foodmeals.jpg";
import HeaderCarts from "../HeaderCarts/HeaderCarts";
import styled from "./header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={styled.header}>
        <h1>FoodMeals</h1>
        <HeaderCarts onClickIcon={onShowCart} />
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImg} alt="food-meals" />
      </div>
    </Fragment>
  );
};

export default Header;
