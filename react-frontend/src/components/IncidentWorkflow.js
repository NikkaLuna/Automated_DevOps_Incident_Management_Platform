import React, { useState, useEffect } from 'react';

function IncidentWorkflow() {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/incidents/');
      const data = await response.json();
      setIncidents(data);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  };

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  const handleEscalateIncident = async (incidentId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/incidents/${incidentId}/escalate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Incident escalated:', data);
      fetchIncidents(); // Refresh the incidents list
    } catch (error) {
      console.error('Error escalating incident:', error);
    }
  };

  const handleResolveIncident = async (incidentId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/incidents/${incidentId}/resolve/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Incident resolved:', data);
      fetchIncidents(); // Refresh the incidents list
    } catch (error) {
      console.error('Error resolving incident:', error);
    }
  };

  return (
    <div className="incident-workflow">
      <h2>Incident Resolution Workflow</h2>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <div onClick={() => handleSelectIncident(incident)}>
              {incident.title} - {incident.status}
            </div>
            {selectedIncident && selectedIncident.id === incident.id && (
              <div>
                <button onClick={() => handleEscalateIncident(incident.id)}>Escalate</button>
                <button onClick={() => handleResolveIncident(incident.id)}>Resolve</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentWorkflow;
