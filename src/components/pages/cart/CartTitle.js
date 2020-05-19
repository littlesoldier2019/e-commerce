import React from "react";

const CartTitle = ({ items }) => {
  return (
    <div className="row">
      <div className="col cart__top">
        <div className="cart__title">Bag</div>
        <div className="cart__total-items">{items.length} items</div>
      </div>
    </div>
  );
};

export default CartTitle;
