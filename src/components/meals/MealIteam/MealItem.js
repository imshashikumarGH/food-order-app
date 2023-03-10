import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amonut) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amonut,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price} </div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
