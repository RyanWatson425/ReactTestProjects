import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from '../../store/cart-context';
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  const onOrder = () => {
    for (var item in ctx.items) {
        ctx.removeItem(item.id);
    }
    ctx.totalAmount = 0;
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={onOrder}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
