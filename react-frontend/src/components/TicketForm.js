// src/components/TicketForm.js
import React, { useState } from 'react';

function TicketForm({ onSubmit }) {
  const [ticket, setTicket] = useState({
    title: '',
    description: '',
    severity: 'Low'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicket(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit(ticket);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={ticket.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={ticket.description}
        onChange={handleChange}
      />
      <label htmlFor="severity">Severity:</label>
      <select
        id="severity"
        name="severity"
        value={ticket.severity}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Create Ticket</button>
    </form>
  );
}

export default TicketForm;
