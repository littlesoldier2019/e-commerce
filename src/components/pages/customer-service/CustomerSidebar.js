import React from "react";

const CustomerSidebar = () => {
  return (
    <aside className="customer__sidebar sidebar">
      <div className="sidebar__title">Categories</div>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Order issues
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Delivery
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Returns and refunds
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Payment
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Product & Stock
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            Legal Policies
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default CustomerSidebar;
