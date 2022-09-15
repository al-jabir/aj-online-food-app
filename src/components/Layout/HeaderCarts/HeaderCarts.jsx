import React from "react";
import CartIcon from "../../Cart/CartIcon";

import styled from "./HeaderCarts.module.css";

const HeaderCarts = ({ onClick }) => {
  return (
    <button className={styled.button} onClick={onClick}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styled.badge}> 3 </span>
    </button>
  );
};

export default HeaderCarts;
