// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example of dynamically adding content
    const contentDiv = document.getElementById('content');

    const message = document.createElement('p');
    message.textContent = 'This is a dynamically added message.';
    contentDiv.appendChild(message);

    // Example of fetching data from an API
    fetch('http://localhost:8000/api/items/')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.className = 'item';
                itemElement.textContent = item.name; // Adjust based on your API response structure
                contentDiv.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load data.';
            contentDiv.appendChild(errorMessage);
        });
});
