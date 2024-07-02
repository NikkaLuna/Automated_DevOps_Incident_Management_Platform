// src/components/NotificationList.js
import React from 'react';
import Notification from './Notification';

const NotificationList = ({ notifications, markAllAsRead }) => {
  return (
    <div className="notification-list">
      <button onClick={markAllAsRead}>Mark all as read</button>
      {notifications.map((notification, index) => (
        <Notification key={index} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
