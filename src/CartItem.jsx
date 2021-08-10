import React from "react";
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import { useGlobalContext } from "./context";

const CartItem = ({id, title, price, img, amount}) => {
    // const {clearItem, increaseAmt, decreaseAmt, toggleAmt} = useGlobalContext()
    const {clearItem, toggleAmt} = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="item-info">
        <h4> {title} </h4>
        <h4 className='item-price' > ${price} </h4>
        <button className='remove-btn' onClick={() => clearItem(id)} > remove </button>
      </div>
      <div className='item-qty' >
          <button className='amount-btn' onClick={() => toggleAmt(id, 'inc') } >
          <IoIosArrowUp />
          </button>
          <p className='amount' > {amount} </p>
          <button className='amount-btn' onClick={() => toggleAmt(id, 'dec')} >
              <IoIosArrowDown />
          </button>
      </div>
    </article>
  );
};

export default CartItem;