import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../common/Modal";
import CartContext from "../store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {};
  const cartIteamAddHandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          id={item.id}
          price={item.price}
          amount = {item.amount}
          onAdd={cartIteamAddHandler.bind(null, item.id)}
          onRemove={cartItemRemoveHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hashItem = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hashItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
