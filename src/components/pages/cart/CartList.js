import React, { useState } from "react";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <form className="container">
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </form>
  );
};

export default CartList;
