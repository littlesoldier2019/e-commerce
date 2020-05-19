import React from "react";
import Select from "react-select";

const CartItem = ({ item }) => {
  const colorOptions = item.colors;
  const sizeOptions = item.size;
  const quantityOptions = item.quantity;
  return (
    <div className="row">
      <div className="col cart__item cart-item">
        <div className="row">
          <div className="col-md-6 col-sm-12 cart-item__image">1</div>
          <div className="col-md-6 col-sm-12 cart-item__info">
            <div className="cart-item__title">{item.title}</div>
            <div className="cart-item__price">USD ${item.price}</div>
            <Select options={colorOptions} />
            <Select options={sizeOptions} />
            <Select options={quantityOptions} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
