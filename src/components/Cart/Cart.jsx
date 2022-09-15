import React from "react";
import Modal from "../UI/Modal";
import styled from "./Cart.module.css";
const Cart = () => {
  const CardItem = (
    <ul className={styled["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: "2",
          price: "9$",
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {CardItem}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>25.43</span>
      </div>
      <div className={styled.actions}>
        <button className={styled["button--alt"]}>Close</button>
        <button className={styled.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
