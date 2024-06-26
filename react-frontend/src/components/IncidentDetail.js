// src/components/IncidentDetail.js
import React from 'react';
import IncidentLogs from './IncidentLogs';

const IncidentDetail = ({ incident }) => {
  return (
    <div>
      <h2>Incident Details</h2>
      <p><strong>Title:</strong> {incident.title}</p>
      <p><strong>Description:</strong> {incident.description}</p>
      <p><strong>Status:</strong> {incident.status}</p>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Category:</strong> {incident.category}</p>
      <IncidentLogs incidentId={incident.id} /> {/* Include the IncidentLogs component */}
    </div>
  );
};

export default IncidentDetail;
