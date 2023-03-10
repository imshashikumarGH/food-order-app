import { useContext, useEffect, useState } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../store/Cart-Context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);
  //using contect
  const itemCtx = useContext(CartContext);

  // to get number of items
  const numberofItem = itemCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;

  const { items } = itemCtx;

  useEffect(() => {

    if (items.length === 0) {
      return;
    } else {
      setBtnIsHigh(true);
      // timer to rest the buttonclasses via setBtnIsHigh
      const timer = setTimeout(() => {
        setBtnIsHigh(false);
      }, 300);
      //cleanup the timer every time 
      return() => {
        clearTimeout(timer);
      }
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShownCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>your Cart</span>
      <span className={classes.badge}>{numberofItem}</span>
    </button>
  );
};
export default HeaderCartButton;
