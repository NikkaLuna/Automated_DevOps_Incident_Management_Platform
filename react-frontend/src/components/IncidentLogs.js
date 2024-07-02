import React, { useState, useEffect } from 'react';

const IncidentLogs = ({ incidentId }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/incidents/${incidentId}/logs`);
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, [incidentId]);

  return (
    <div>
      <h3>Logs</h3>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentLogs;
