// src/components/CreateIncidentForm.js
import React, { useState } from 'react';

function CreateIncidentForm() {
  const [incident, setIncident] = useState({
    title: '',
    description: '',
    severity: 'Low'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIncident(prevState => ({
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
        'X-CSRFToken': getCookie('csrftoken')  // Ensure you handle CSRF tokens correctly
      },
      body: JSON.stringify(incident)
    });
    const data = await response.json();
    console.log(data);  // Handle the response
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={incident.title} onChange={handleChange} />
      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={incident.description} onChange={handleChange} />
      <label htmlFor="severity">Severity:</label>
      <select id="severity" name="severity" value={incident.severity} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );

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
  
}

export default CreateIncidentForm;
