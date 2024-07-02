import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateIncidentForm.css';
import getCookie from '../utils/csrfToken';

import '../dataTables.bootstrap4.min.css';
import '../jquery.dataTables.min.js';
import '../dataTables.bootstrap4.min.js';

function CreateIncidentForm() {
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    severity: 'Low',
    category: '',
    status: 'Open'
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('http://localhost:8000/api/categories/');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIncident((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ticket = {
      title: incident.title,
      description: incident.description,
      severity: incident.severity,
      category: incident.category,
      status: incident.status,
    };

    console.log('Submitting ticket:', ticket); // Debugging line

    const csrfToken = getCookie('csrftoken');
    const username = 'devopsgirl';
    const password = 'new-password'; 

    try {
      const response = await fetch('http://localhost:8000/api/tickets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
          'Authorization': 'Basic ' + btoa(`${username}:${password}`),
        },
        body: JSON.stringify(ticket),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert('Ticket created successfully!');
        setIncident({
          title: '',
          description: '',
          severity: 'Low',
          category: '',
          status: 'Open'
        });
      } else {
        console.error('Error response:', responseData);
        alert('Failed to create ticket.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Create Ticket</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="incident-form">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={incident.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={incident.description}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">Severity:</label>
            <select
              id="severity"
              name="severity"
              value={incident.severity}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={incident.category}
              onChange={handleChange}
              className="form-control"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={incident.status}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Create Ticket</button>
        </form>
      </div>
    </div>
  );
}

export default CreateIncidentForm;