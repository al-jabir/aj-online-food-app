import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";

import { CartContext } from "../../../Store/Cart-Context";
import styled from "./HeaderCarts.module.css";

const HeaderCarts = ({ onClickIcon }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styled.button} ${btnIsHighlighted ? styled.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={onClickIcon}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styled.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCarts;
