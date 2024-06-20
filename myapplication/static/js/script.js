document.getElementById('createResourceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('/create-resource/', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
        // Update the resource list dynamically
        updateResourceList([data]); // Wrapped data in an array
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');

    if (contentDiv) {
        const message = document.createElement('p');
        message.textContent = 'This is a dynamically added message.';
        contentDiv.appendChild(message);
    }

    fetch('http://localhost:8000/api/items/')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const itemElement = document.createElement('p');
                itemElement.className = 'item';
                itemElement.textContent = item.name; // Adjust based on your API response structure
                if (contentDiv) {
                    contentDiv.appendChild(itemElement);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            if (contentDiv) {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Failed to load data.';
                contentDiv.appendChild(errorMessage);
            }
        });
});

function updateResourceList(data) {
    const resourceCards = document.getElementById('resourceCards');
    if (resourceCards) {
        resourceCards.innerHTML = '';
        data.forEach(resource => {
            const card = document.createElement('div');
            card.className = 'resource-card';
            card.innerHTML = `<h3>${resource.name}</h3><p>${resource.type}</p>`;
            resourceCards.appendChild(card);
        });
    } else {
        console.error('Element with id resourceCards not found');
    }
}
