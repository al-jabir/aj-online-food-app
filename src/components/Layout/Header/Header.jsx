import React from "react";

import mealsImg from "../../assets/foodmeals.jpg";
import styled from "./header.module.css";
const Header = () => {
  return (
    <>
      <header className={styled.header}>
        <h1>FoodMeals</h1>
        <button>card</button>
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImg} alt="food-meals" />
      </div>
    </>
  );
};

export default Header;
