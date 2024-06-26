// src/components/IncidentChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IncidentChart = ({ data }) => {
  const chartData = {
    labels: ['Open', 'Resolved', 'Escalated'],
    datasets: [
      {
        label: 'Incidents',
        data: [
          data.filter(incident => incident.status === 'Open').length,
          data.filter(incident => incident.status === 'Resolved').length,
          data.filter(incident => incident.status === 'Escalated').length,
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default IncidentChart;
