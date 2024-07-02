// src/components/IncidentList.js
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../dataTables.bootstrap4.min.css';
import 'datatables.net-bs4';
import { getIncidents } from '../services/api';
import '../css/style.css';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const data = await getIncidents();
        setIncidents(data);
        initializeDataTable();
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };

    fetchIncidents();
  }, []);

  const initializeDataTable = () => {
    $(document).ready(function() {
      $('#incidentTable').DataTable();
    });
  };

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  return (
    <div>
      
      <h1 className="incident-header">Open Incidents</h1> {/* Added className here */}
      <table id="incidentTable" className="display table table-dark table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Severity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id} onClick={() => handleSelectIncident(incident)}>
              <td>{incident.title}</td>
              <td>{incident.description}</td>
              <td>{incident.status}</td>
              <td>{incident.severity}</td>
              <td>{incident.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedIncident && (
        <div>
          <h2>Incident Details</h2>
          <p><strong>Title:</strong> {selectedIncident.title}</p>
          <p><strong>Description:</strong> {selectedIncident.description}</p>
          <p><strong>Status:</strong> {selectedIncident.status}</p>
          <p><strong>Severity:</strong> {selectedIncident.severity}</p>
          <p><strong>Category:</strong> {selectedIncident.category}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentList;
