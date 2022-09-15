import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";

import { CartContext } from "../../../Store/Cart-Context";
import styled from "./HeaderCarts.module.css";

const HeaderCarts = ({ onClickIcon }) => {
  const cartCount = useContext(CartContext);

  const numberOfCartItem = cartCount.items.reduce((currCont, item) => {
    return (currCont += item.amount);
  }, 0);
  console.log({ numberOfCartItem });
  return (
    <button className={styled.button} onClick={onClickIcon}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styled.badge}> {numberOfCartItem} </span>
    </button>
  );
};

export default HeaderCarts;
