import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContext from "../store/Cart-Context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton =(props) =>{
    const itemCtx = useContext(CartContext)
    return <button className={classes.button} onClick = {props.onShownCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>your Cart</span>
        <span className={classes.badge}>{itemCtx.item.length}</span>
    </button>
}
export default HeaderCartButton