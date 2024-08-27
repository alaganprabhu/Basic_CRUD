// src/components/Sidebar/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css"; // optional CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
