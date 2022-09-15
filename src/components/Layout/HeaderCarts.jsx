import React from "react";
import CartIcon from "../Cart/CartIcon";

import styled from "./HeaderCarts.module.css";

const HeaderCarts = () => {
  return (
    <button className={styled.button}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span className={styled.badge}> Your Cart </span>
      <span> 3 </span>
    </button>
  );
};

export default HeaderCarts;
