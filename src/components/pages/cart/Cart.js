import React, { useState } from "react";
import CartTitle from "./CartTitle";
import CartList from "./CartList";
import Total from "./Total";
import '../../../assets/styles/cart.scss';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "white beauty mrs blondes mid length denim short",
      price: 340,
      colors: [
        { value: "white", label: "White" },
        { value: "black", label: "Black" },
        { value: "red", label: "Red" },
      ],
      size: [
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
      ],
      quantity: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ],
    },
    {
      id: 2,
      title: "victorious spilt back top",
      price: 150,
      colors: [
        { value: "yellow", label: "Yellow" },
        { value: "pink", label: "Pink" },
        { value: "green", label: "Green" },
      ],
      size: [
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
      ],
      quantity: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ],
    },
  ]);
  return (
    <div className="container cart">
      <CartTitle items={cartItems} />
      <CartList items={cartItems} />
      <Total items={cartItems} />
    </div>
  );
};

export default Cart;
