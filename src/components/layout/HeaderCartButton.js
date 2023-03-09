import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  //using contect
  const itemCtx = useContext(CartContext);

  // to get number of items 
  const numberofItem = itemCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShownCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your Cart</span>
      <span className={classes.badge}>{numberofItem}</span>
    </button>
  );
};
export default HeaderCartButton;
