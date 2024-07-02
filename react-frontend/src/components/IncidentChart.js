import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const IncidentChart = ({ data, chartType }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    chartInstance.current = new Chart(ctx, {
      type: chartType,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Active Incidents',
            data: data.activeIncidents,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)', // Changed to white
          },
          {
            label: 'Resolved Incidents',
            data: data.resolvedIncidents,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)', // Changed to white
          },
          {
            label: 'Escalations',
            data: data.escalations,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 255, 255, 1)', // Changed to white
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, chartType]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default IncidentChart;
