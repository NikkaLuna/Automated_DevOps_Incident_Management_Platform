// src/components/CreateIncidentForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateIncidentForm.css';

function CreateIncidentForm() {
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    severity: 'Low'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIncident((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/create-incident/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken') // Ensure you handle CSRF tokens correctly
      },
      body: JSON.stringify(incident)
    });
    const data = await response.json();
    console.log(data); // Handle the response
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  return (
    <div className="container">
      <h1 className="header">Create Ticket</h1> {/* Apply the header class */}
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
          <button type="submit" className="btn btn-primary">Create Ticket</button>
        </form>
      </div>
    </div>
  );
}

export default CreateIncidentForm;
