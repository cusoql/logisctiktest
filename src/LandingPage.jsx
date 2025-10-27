import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div
  className="landing"
  style={{ backgroundImage: "url('/assets/ship-bg.png')" }}
>

      <div className="overlay"></div>
      <div className="content">
        <h1>Umala Logistics</h1>
        
        <Link to="/home" className="btn-neon">
          Перейти на сайт
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
