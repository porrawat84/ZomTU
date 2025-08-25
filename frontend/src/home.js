import React from 'react';
import './home.css'; // Import CSS สำหรับหน้า Home

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <h1>ซ่อมheeซ่อมtad</h1>
      </header>

      {/* Grid ข้อความ */}
      <div className="home-grid">
        <div className="home-item">แจ้งเหตุ</div>
        <div className="home-item">ตรวจสอบสถานะ</div>
        <div className="home-item">ประวัติการแจ้ง</div>
        <div className="home-item">ติดต่อเจ้าหน้าที่</div>
      </div>
    </div>
  );
}

export default Home;