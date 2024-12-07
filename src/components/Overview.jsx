import React from "react";
import "./css/Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <div className="card">Total Traffic: 50k</div>
      <div className="card">Total Sales: $12k</div>
      <div className="card">Conversion Rate: 4%</div>
      <div className="card">Bounce Rate: 20%</div>
    </div>
  );
};

export default Overview;
