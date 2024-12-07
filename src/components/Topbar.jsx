import React from "react";
import "./css/Topbar.css";


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="brand">House of Mark Tech</div>
      <div className="topbar-options">
        <input type="text" placeholder="Search..." />
        <span>Notifications</span>
        <span>User Profile</span>
      </div>
    </div>
  );
};

export default Topbar;
