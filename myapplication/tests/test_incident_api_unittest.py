import unittest
import requests
import json

BASE_URL = "http://localhost:8000/api/incidents/"
CATEGORY_URL = "http://localhost:8000/api/categories/"

headers = {
    "Content-Type": "application/json",
}


class TestIncidentAPI(unittest.TestCase):

    def setUp(self):
        self.ensure_category_exists()
        self.incident_id = self.create_incident()

    def tearDown(self):
        if self.incident_id:
            self.delete_incident(self.incident_id)

    def ensure_category_exists(self):
        # Check if the category exists
        response = requests.get(f"{CATEGORY_URL}1/", headers=headers)
        if response.status_code == 404:
            # Create the category if it doesn't exist
            data = {
                "id": 1,
                "name": "Test Category",
            }
            response = requests.post(CATEGORY_URL, headers=headers, data=json.dumps(data))
            self.assertEqual(response.status_code, 201)

    def create_incident(self):
        data = {
            "title": "Test Incident",
            "description": "This is a test incident.",
            "status": "Open",
            "severity": "High",
            "category": 1,  # Ensure this category ID exists
        }
        response = requests.post(BASE_URL, headers=headers, data=json.dumps(data))
        print(f"Create Incident Response: {response.status_code} - {response.text}")
        self.assertEqual(response.status_code, 201)
        return response.json()["id"]

    def update_incident(self, incident_id):
        url = f"{BASE_URL}{incident_id}/"
        data = {
            "title": "Updated Test Incident",
            "description": "This is an updated test incident.",
            "status": "Resolved",
            "severity": "Medium",
            "category": 1,  # Ensure this category ID exists
        }
        response = requests.put(url, headers=headers, data=json.dumps(data))
        print(f"Update Incident Response: {response.status_code} - {response.text}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], "Updated Test Incident")

    def verify_update(self, incident_id):
        url = f"{BASE_URL}{incident_id}/"
        response = requests.get(url, headers=headers)
        print(f"Verify Update Response: {response.status_code} - {response.text}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], "Updated Test Incident")

    def delete_incident(self, incident_id):
        url = f"{BASE_URL}{incident_id}/"
        response = requests.delete(url, headers=headers)
        print(f"Delete Incident Response: {response.status_code} - {response.text}")
        self.assertEqual(response.status_code, 204)

    def verify_deletion(self, incident_id):
        url = f"{BASE_URL}{incident_id}/"
        response = requests.get(url, headers=headers)
        print(f"Verify Deletion Response: {response.status_code} - {response.text}")
        self.assertEqual(response.status_code, 404)

    def test_incident_lifecycle(self):
        self.update_incident(self.incident_id)
        self.verify_update(self.incident_id)

        # Test Deletion
        self.delete_incident(self.incident_id)
        self.verify_deletion(self.incident_id)
        self.incident_id = None  # Prevent tearDown from trying to delete again


if __name__ == "__main__":
    unittest.main()
