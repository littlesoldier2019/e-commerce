import React, { useState } from "react";
import CustomerSidebar from "./CustomerSidebar";
import CustomerContent from "./CustomerContent";
import "../../../assets/styles/customer.scss";

const CustomerService = () => {
  return (
    <div className="container customer-service">
      <div className="row">
        <div className="col-md-4">
          <CustomerSidebar />
        </div>
        <div className="col-md-8">
          <CustomerContent />
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
