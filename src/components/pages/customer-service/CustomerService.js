import React, { useState } from "react";
import CustomerToggle from "./CustomerToggle";
import CustomerSidebar from "./CustomerSidebar";
import CustomerContent from "./CustomerContent";

const CustomerService = () => {
  return (
    <div className="container">
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
