// Home.js

import React from "react";
import Navbar from "./Navbar";
import "./landing.css"; // Your existing styles

const Landing = () => {
  return (
    <div className="dashboard-container">
      {/* Add background style to the entire page */}
      <div className="background-image">
        {/* Include the Sidebar component */}

        <Navbar />
        <div className="center1">
          <h2>Welcome to </h2>
          <h3>Dreamland Inn</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
