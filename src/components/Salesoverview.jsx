import React from "react";
import "./css/SalesOverview.css";

const SalesOverview = () => {
  return (
    <div className="sales-overview-page">
      <h1>Sales Overview</h1>
      <div className="sales-cards">
        <div className="card">
          <h2>Total Revenue</h2>
          <p>$120,000</p>
        </div>
        <div className="card">
          <h2>Number of Sales</h2>
          <p>1,500</p>
        </div>
        <div className="card">
          <h2>Average Order Value</h2>
          <p>$80</p>
        </div>
        <div className="card">
          <h2>Return Customers</h2>
          <p>30%</p>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
