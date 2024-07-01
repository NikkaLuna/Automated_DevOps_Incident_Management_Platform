// src/components/Sidebar/Sidebar.js
import React from 'react';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#!" onClick={() => setActiveComponent('dashboard')}>
        <div className="sidebar-brand-icon">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Incident Management</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('dashboard')}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('active-incidents')}>
          <i className="fas fa-fw fa-exclamation-circle"></i>
          <span>Active Incidents</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('resolved-incidents')}>
          <i className="fas fa-fw fa-check-circle"></i>
          <span>Resolved Incidents</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('escalations')}>
          <i className="fas fa-fw fa-arrow-up"></i>
          <span>Escalations</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('notifications')}>
          <i className="fas fa-fw fa-bell"></i>
          <span>Notifications</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={() => setActiveComponent('documentation')}>
          <i className="fas fa-fw fa-book"></i>
          <span>Documentation</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
