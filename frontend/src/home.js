import React from 'react';
import './home.css'; // Import the CSS file

function Home() {
  const handleReport = () => {
    console.log('แจ้งเหตุ');
    // Add logic for reporting an incident
  };

  const handleStatus = () => {
    console.log('ดูสถานะ');
    // Add logic for viewing status
  };

  const handleHistory = () => {
    console.log('ดูประวัติการแจ้ง');
    // Add logic for viewing history
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="button-container">
        <button className="home-button" onClick={handleReport}>แจ้งเหตุ</button>
        <button className="home-button" onClick={handleStatus}>ดูสถานะ</button>
        <button className="home-button" onClick={handleHistory}>ดูประวัติการแจ้ง</button>
      </div>
    </div>
  );
}

export default Home;