import React, { useEffect, useState } from 'react';

function ContentComponent() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulates componentDidMount, fetches data on component mount
    fetch('http://localhost:8000/api/items/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems(data); // Stores the data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data.'); // Handles any errors
      });
  }, []); // The empty dependency array [] means this effect runs only once similar to componentDidMount

  return (
    <div id="content">
      <p>This is a dynamically added message.</p>
      {error && <p>{error}</p>}
      {items.map(item => (
        <p className="item" key={item.id}>{item.name}</p> // Renders items dynamically, uses `key` for React elements
      ))}
    </div>
  );
}

export default ContentComponent;
