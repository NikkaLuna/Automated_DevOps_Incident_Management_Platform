// src/components/MainContent/MainContent.js
import React from 'react';


function MainContent() {
  return (
    <main>
      <section className="widgets">
        <div className="widget">Open Incidents</div>
        <div className="widget">Resolved Incidents</div>
        <div className="widget">Escalations</div>
        <div className="widget">Notifications</div>
      </section>
    </main>
  );
}

export default MainContent;
