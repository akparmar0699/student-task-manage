import React from "react";
import "../index.css";

function Navbar({title, onlogout}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>

      <div className="navbar-actions">
        <button className="btn-primary">Add Task</button>

        <button className="btn-secondary" onClick={onlogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
