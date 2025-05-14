import React from "react";
import "../Component/Homepage.css";

import urbanImg from "../assets/home.jpg";
import homeImg from "../assets/urban.jpg";

const HomePage = () => {
  return (
    <div className="container">
    <div className="image-section">
      <div className="image-box">
        <img src={urbanImg} alt="Urban Architecture" />
        <div className="text-box">
          <h2><strong>Urban</strong> Architecture</h2>
        </div>
      </div>
      <div className="image-box">
        <img src={homeImg} alt="Home Interior" />
        <div className="text-box">
          <h2><strong>Home</strong> Interior</h2>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HomePage;
