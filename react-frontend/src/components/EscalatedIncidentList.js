// src/components/EscalatedIncidentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../dataTables.bootstrap4.min.css';
import 'datatables.net-bs4';
import '../css/style.css';

const EscalatedIncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await axios.get('/api/incidents/?status=Escalated');
        setIncidents(response.data);
        initializeDataTable();
      } catch (error) {
        console.error('Error fetching incidents:', error);
      }
    };

    fetchIncidents();
  }, []);

  const initializeDataTable = () => {
    $(document).ready(function() {
      // Check if the DataTable is already initialized
      if ($.fn.DataTable.isDataTable('#escalatedIncidentTable')) {
        // If it is, destroy it first
        $('#escalatedIncidentTable').DataTable().clear().destroy();
      }

      $('#escalatedIncidentTable').DataTable({
        responsive: true,
        autoWidth: false, // Disable automatic column width calculation
      });
    });
  };

  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident);
  };

  return (
    <div className="main-content">
      <h1 className="escalated-incidents-header">Escalated Incidents</h1>
      <div className="table-container">
        <table id="escalatedIncidentTable" className="display nowrap dataTable" style={{ width: '100%' }}>
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
                <td>{incident.category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedIncident && (
        <div>
          <h2>Incident Details</h2>
          <p><strong>Title:</strong> {selectedIncident.title}</p>
          <p><strong>Description:</strong> {selectedIncident.description}</p>
          <p><strong>Status:</strong> {selectedIncident.status}</p>
          <p><strong>Severity:</strong> {selectedIncident.severity}</p>
          <p><strong>Category:</strong> {selectedIncident.category.name}</p>
        </div>
      )}
    </div>
  );
};

export default EscalatedIncidentList;

