import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import CustomerService from "./components/pages/customer-service/CustomerService";

function App() {
  return (
    <div className="App">
      <CustomerService />
    </div>
  );
}

export default App;
