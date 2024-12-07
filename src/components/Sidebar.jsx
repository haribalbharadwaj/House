import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Sidebar.css";
import House from '../../src/assets/house.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <image src={House}/>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <NavLink exact="true" to="/" activeclassname="active">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeclassname="active">
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales-overview" activeclassname="active">
            Sales Overview
          </NavLink>
        </li>
        <li>Traffic Analytics</li>
        <li>User Engagement</li>
        <li>Conversion Rates</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
