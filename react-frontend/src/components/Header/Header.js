// src/components/Header/Header.js
import React from 'react';
import UserProfile from '../UserProfile';



function Header() {
    return (
      <header>
        <div className="logo">IncidentManage</div>
        <nav>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#incidents">Incidents</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
        <UserProfile /> 
      </header>
    );
  }
  
  export default Header;