import React from "react";
import styled from "./Card.module.css";

const Card = ({ children }) => {
  return <div className={styled.card}>{children}</div>;
};

export default Card;
