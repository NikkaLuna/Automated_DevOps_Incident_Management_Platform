// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import CreateResourceForm from './components/CreateResourceForm';
import ContentComponent from './components/ContentComponent';
import TicketFormContainer from './components/TicketFormContainer';
import IncidentWorkflow from './components/IncidentWorkflow';
import IncidentChart from './components/IncidentChart';
import IncidentList from './components/IncidentList';
import './App.css';
import './css/style.css';

function App() {
  const handleResourceCreated = (resource) => {
    console.log('Resource created:', resource);
  };

  // Dummy data for testing
  const incidentData = [
    { id: 1, status: 'Open' },
    { id: 2, status: 'Resolved' },
    { id: 3, status: 'Escalated' },
    { id: 4, status: 'Open' },
    // Add more test data as needed
  ];

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <MainContent />
          <CreateResourceForm onResourceCreated={handleResourceCreated} />
          <ContentComponent />
          <TicketFormContainer />
          <IncidentWorkflow />
          <IncidentChart data={incidentData} /> {/* Pass the incident data here */}
          <IncidentList /> {/* Include the IncidentList component */}
        </main>
      </div>
    </div>
  );
}

export default App;
