import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
import mealsImage from './meals.jpg'

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}> ReactMeals 
      <HeaderCartButton cartItemNumber={('#')}/></div>
      <div className={classes.main_image}>
        <img src={mealsImage} alt="A large plate of meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
