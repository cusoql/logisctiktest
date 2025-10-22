import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="content">
        <h1>Umala Logistics</h1>
      </div>
      <div className="bottom-btn">
        <Link className="btn" to="/home">
          Перейти на сайт
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
