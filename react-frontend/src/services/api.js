// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getIncidents = async () => {
  try {
    const response = await axios.get(`${API_URL}/incidents/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching incidents:', error);
    throw error;
  }
};

export const createIncident = async (incident) => {
  try {
    const response = await axios.post(`${API_URL}/incidents/`, incident);
    return response.data;
  } catch (error) {
    console.error('Error creating incident:', error);
    throw error;
  }
};
