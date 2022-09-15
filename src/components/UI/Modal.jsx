import React from "react";
import ReactDOM from "react-dom";
import styled from "./Modal.module.css";

const Backdrop = () => {
  return <div className={styled.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styled.modal}>
      <div className={styled.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("root-modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("root-modal")
      )}
    </>
  );
};

export default Modal;
