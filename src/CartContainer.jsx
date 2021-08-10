import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <header>
          <h2>Your Bag</h2>
          <h5>is currently empty</h5>
        </header>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div className="cart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart} >
            Clear Cart
        </button>
      </footer>
    </div>
  );
};

export default CartContainer;