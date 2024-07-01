// src/App.js
import React, { useState } from 'react';
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
import './App.css';
import './components/Dashboard.css';
import './css/style.css';
import './sb-admin-2.min.css'; // Make sure this path is correct

function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleResourceCreated = (resource) => {
    console.log('Resource created:', resource);
  };

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
        return <div>Active Incidents Content</div>;
      case 'resolved-incidents':
        return <div>Resolved Incidents Content</div>;
      case 'escalations':
        return <div>Escalations Content</div>;
      case 'notifications':
        return <div>Notifications Content</div>;
      case 'documentation':
        return <div>Documentation Content</div>;
      case 'dashboard':
      default:
        return <Dashboard incidentData={incidentData} monthlyIncidentData={monthlyIncidentData} />;
    }
  };

  return (
    <div className="App">
      <Header />
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
