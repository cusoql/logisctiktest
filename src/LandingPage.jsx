import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import bgImage from "/assets/ship-bg.png"; // Помести твою картинку в папку src/assets и назови ship-bg.png

const LandingPage = () => {
  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h1>Umala Logistics</h1>
        <p>Надёжные решения для логистики и морских перевозок</p>
        <Link to="/home" className="btn-neon">
          Перейти на сайт
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
