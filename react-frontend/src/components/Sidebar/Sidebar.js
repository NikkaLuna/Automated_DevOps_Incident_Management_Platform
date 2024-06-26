// src/components/Sidebar/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <aside>
      <div className="sidebar">
        <input type="text" placeholder="Search..." />
        <ul>
          <li><a href="#active-incidents">Active Incidents</a></li>
          <li><a href="#resolved-incidents">Resolved Incidents</a></li>
          <li><a href="#escalations">Escalations</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#documentation">Documentation</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
