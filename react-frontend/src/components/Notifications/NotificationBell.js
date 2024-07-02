// src/components/NotificationBell.js
import React from 'react';

const NotificationBell = ({ unreadCount }) => {
  return (
    <div className="notification-bell">
      <i className="fas fa-bell"></i>
      {unreadCount > 0 && <span className="unread-count">{unreadCount}</span>}
    </div>
  );
};

export default NotificationBell;
