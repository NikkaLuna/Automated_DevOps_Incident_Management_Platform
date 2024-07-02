// src/DashboardHeader.js
import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="search-bar">
        <input type="text" placeholder="Search for..." />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <button className="generate-report-button">
        <i className="fas fa-download"></i>
        Generate Report
      </button>
    </div>
  );
};

export default DashboardHeader;
