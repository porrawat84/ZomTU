import React from 'react';
import './home.css';
import report from './image/report.png';
import checkstatus from './image/checklist.png';
import history from './image/history.png';
import contact from './image/contact.png';
import logo from "./image/logo.png"; 

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="home-header">
              <img src={logo} alt="logo" className="home-logo" />
              </div>
      </header>

      {/* Grid ข้อความ */}
      <div className="home-grid">
        <div className="home-item">
          <img src={report} alt="แจ้งเหตุ" className="home-icon-report" />
          <p>แจ้งเหตุ</p>
        </div>
        <div className="home-item">
          <img src={checkstatus} alt="ตรวจสอบสถานะ" className="home-icon-status" />
          <p>ตรวจสอบสถานะ</p>
        </div>
        <div className="home-item">
          <img src={history} alt="ประวัติการแจ้งเหตุ" className="home-icon-history" />
          <p>ประวัติการแจ้งเหตุ</p>
        </div>
        <div className="home-item">
          <img src={contact} alt="ติดต่อเจ้าหน้าที่" className="home-icon-contact" />
          <p>ติดต่อเจ้าหน้าที่</p>
        </div>
    </div>
    </div>
  );
}

export default Home;