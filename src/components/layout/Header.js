import React  from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>HXMeals</h1>
        <HeaderCartButton onShownCart = {props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt = "FODD food Food FOOD"></img> */
      </div>
    </React.Fragment>
  );
};

export default Header;
