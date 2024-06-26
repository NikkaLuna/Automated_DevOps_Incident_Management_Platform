// src/components/IncidentLogs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IncidentLogs = ({ incidentId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/incidents/${incidentId}/logs/`);
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching incident logs:', error);
      }
    };

    fetchLogs();
  }, [incidentId]);

  return (
    <div>
      <h3>Incident Logs</h3>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.action} at {new Date(log.timestamp).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentLogs;
