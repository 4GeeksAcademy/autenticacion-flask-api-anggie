import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          <Link to="/single">
            <button className="btn btn-secondary">Registrarse</button>
          </Link>
        </div>
        {/* <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Data</button>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};
