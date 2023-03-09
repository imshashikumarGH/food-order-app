import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton =(props) =>{
    return <button className={classes.button} onClick = {props.onShownCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
}
export default HeaderCartButton