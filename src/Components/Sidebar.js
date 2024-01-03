// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="vertical">
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" className="sidebar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="sidebar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
