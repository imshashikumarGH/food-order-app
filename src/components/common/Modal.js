import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const protalId = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onHideCart = {props.onHideCart} />, protalId)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalId
      )}
    </React.Fragment>
  );
};

export default Modal;
