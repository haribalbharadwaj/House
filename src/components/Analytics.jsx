import React from "react";
import "./css/Analytics.css";

const Analytics = () => {
  return (
    <div className="analytics-page">
      <h1>Analytics</h1>
      <div className="analytics-cards">
        <div className="card">
          <h2>Total Visitors</h2>
          <p>50,000</p>
        </div>
        <div className="card">
          <h2>Unique Visitors</h2>
          <p>30,000</p>
        </div>
        <div className="card">
          <h2>Bounce Rate</h2>
          <p>20%</p>
        </div>
        <div className="card">
          <h2>Average Session Duration</h2>
          <p>3m 45s</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
