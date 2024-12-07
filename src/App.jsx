import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Overview from "./components/Overview";
import TrafficChart from "./components/TrafficChart";
import Analytics from "./components/Analytics";
import SalesOverview from "./components/SalesOverview";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/sales-overview" element={<SalesOverview />} />
            </Routes>
            <TrafficChart />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
