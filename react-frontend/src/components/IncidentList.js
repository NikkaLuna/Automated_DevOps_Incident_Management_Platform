// src/components/IncidentList.js
import React, { useState, useEffect } from 'react';
import IncidentDetail from './IncidentDetail';
import { getIncidents } from '../services/api';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const data = await getIncidents();
        setIncidents(data);
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };

    fetchIncidents();
  }, []);

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  return (
    <div>
      <h1>Incidents</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id} onClick={() => handleSelectIncident(incident)}>
            {incident.title}
          </li>
        ))}
      </ul>
      {selectedIncident && <IncidentDetail incident={selectedIncident} />}
    </div>
  );
};

export default IncidentList;
