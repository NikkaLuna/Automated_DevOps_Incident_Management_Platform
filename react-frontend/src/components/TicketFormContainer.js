// src/components/TicketFormContainer.js
import React from 'react';
import TicketForm from './TicketForm';

function TicketFormContainer() {
  const handleSubmit = async (ticketData) => {
    try {
      const response = await fetch('http://localhost:8000/api/tickets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': 'your-csrf-token-here'  // Adjust as necessary for CSRF protection
        },
        body: JSON.stringify(ticketData)
      });
      const data = await response.json();
      console.log('Ticket created:', data);
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return <TicketForm onSubmit={handleSubmit} />;
}

export default TicketFormContainer;
