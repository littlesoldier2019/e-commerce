import React from "react";
import Select from "react-select";

const CartItem = ({ item }) => {
  const colorOptions = item.colors;
  const sizeOptions = item.size;
  const quantityOptions = item.quantity;
  return (
    <div className="row">
      <div className="col cart__item cart-item">
        <div className="row cart-item__row">
          <div className="col-md-4 col-sm-12 cart-item__image"></div>
          <div className="col-md-7 col-sm-12 cart-item__info">
            <div className="cart-item__title">{item.title}</div>
            <div className="cart-item__price">USD ${item.price}</div>
            <Select className="cart-item__select" options={colorOptions} />
            <Select className="cart-item__select" options={sizeOptions} />
            <Select className="cart-item__select" options={quantityOptions} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn__remove"><i class="fas fa-times"></i>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
