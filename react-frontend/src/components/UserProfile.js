import React, { useState } from 'react';


function UserProfile() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  
    return (
      <div className="user-profile" onClick={toggleDropdown}>
        <span className="material-icons">account_circle</span>
        {dropdownVisible && (
          <div className="dropdown">
            <ul>
              <li><a href="#profile">Profile Settings</a></li>
              <li><a href="#notifications">Notifications</a></li>
              <li><a href="#logout">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default UserProfile;