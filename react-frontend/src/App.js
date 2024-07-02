// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import CreateResourceForm from './components/CreateResourceForm';
import ContentComponent from './components/ContentComponent';
import TicketFormContainer from './components/TicketFormContainer';
import IncidentWorkflow from './components/IncidentWorkflow';
import IncidentChart from './components/IncidentChart';
import IncidentPieChart from './components/IncidentPieChart';
import IncidentList from './components/IncidentList';
import Dashboard from './components/Dashboard';
import ResolvedIncidentList from './components/ResolvedIncidentList';
import EscalatedIncidentList from './components/EscalatedIncidentList';
import CreateIncidentForm from './components/CreateIncidentForm';
import DashboardHeader from './components/DashboardHeader';
import NotificationBell from './components/Notifications/NotificationBell';
import NotificationList from './components/Notifications/NotificationList';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'
import './App.css';
import './components/Dashboard.css';
import './css/style.css';
import './sb-admin-2.min.css'; 
import './components/Header/Header.css';


function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const handleResourceCreated = (resource) => {
    console.log('Resource created:', resource);
    addNotification({ type: 'resource_created', message: 'New resource created!', read: false });
  };

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
    setUnreadCount(0);
  };

  useEffect(() => {
    const unreadNotifications = notifications.filter((notification) => !notification.read).length;
    setUnreadCount(unreadNotifications);
  }, [notifications]);

  const incidentData = [
    { id: 1, status: 'Open' },
    { id: 2, status: 'Resolved' },
    { id: 3, status: 'Escalated' },
    { id: 4, status: 'Open' },
    // Add more test data as needed
  ];

  const monthlyIncidentData = {
    activeIncidents: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    resolvedIncidents: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    escalations: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'main':
        return <MainContent />;
      case 'create-resource':
        return <CreateResourceForm onResourceCreated={handleResourceCreated} />;
      case 'content':
        return <ContentComponent />;
      case 'ticket-form':
        return <TicketFormContainer />;
      case 'incident-workflow':
        return <IncidentWorkflow />;
      case 'incident-chart':
        return <IncidentChart data={monthlyIncidentData} chartType="line" />;
      case 'incident-pie-chart':
        return <IncidentPieChart data={incidentData} />;
      case 'incident-list':
        return <IncidentList />;
      case 'active-incidents':
        return <IncidentList />;
      case 'resolved-incidents':
        return <ResolvedIncidentList />;
      case 'escalations':
        return <EscalatedIncidentList />;
      case 'notifications':
        return <NotificationList notifications={notifications} markAllAsRead={markAllAsRead} />;
      case 'create-ticket':
        return <CreateIncidentForm />;
      case 'dashboard':
      default:
        return <Dashboard incidentData={incidentData} monthlyIncidentData={monthlyIncidentData} />;
    }
  };

  return (
    <div className="App">
      <DashboardHeader />
      <Header />
      <NotificationBell unreadCount={unreadCount} />
      <div className="app-body d-flex">
        <Sidebar setActiveComponent={setActiveComponent} />
        <main className="main-content flex-grow-1">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}

export default App;