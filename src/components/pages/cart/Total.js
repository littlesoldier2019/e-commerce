import React from "react";

const Total = ({ items }) => {
  let price = 0;
  items.forEach((item) => {
    price += item.price;
  });

  return (
    <>
      <div className="total__price">Total USD ${price}</div>
      <button className="btn total__btn">Proceed to checkout</button>
    </>
  );
};
export default Total;
