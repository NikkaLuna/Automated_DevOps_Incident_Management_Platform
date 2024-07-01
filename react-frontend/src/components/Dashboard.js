// src/components/Dashboard.js
import React from 'react';
import IncidentChart from './IncidentChart';
import IncidentPieChart from './IncidentPieChart';
import DashboardCard from './DashboardCard';

const Dashboard = ({ incidentData, monthlyIncidentData }) => {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dashboard</h1>
      <div className="row">
        <DashboardCard title="Open Incidents" value={5} icon="clipboard-list" />
        <DashboardCard title="Resolved Incidents" value={10} icon="check-circle" />
        <DashboardCard title="Escalations" value={3} icon="exclamation-triangle" />
        <DashboardCard title="Notifications" value={8} icon="bell" />
      </div>
      <div className="row">
        <div className="col-lg-6 equal-height">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Incident Trends</h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <IncidentChart data={monthlyIncidentData} chartType="line" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 equal-height">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Incident Breakdown</h6>
            </div>
            <div className="card-body">
              <div className="chart-pie">
                <IncidentPieChart data={incidentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
