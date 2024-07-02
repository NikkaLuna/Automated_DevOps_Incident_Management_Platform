import React from 'react';
import UserProfile from '../UserProfile';
import './Header.css';

function Header() {
  return (
    <header className="topbar navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#!" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={`${process.env.PUBLIC_URL}/bell.svg`} alt="Bell Icon" className="bell-icon" />
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
        </li>
        <li className="nav-item">
          <UserProfile />
        </li>
      </ul>
    </header>
  );
}

export default Header;
