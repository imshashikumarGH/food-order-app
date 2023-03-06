import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>HXMeals</h1>
        <button >Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt = "FODD food Food FOOD"></img> */
      </div>
    </React.Fragment>
  );
};

export default Header;
