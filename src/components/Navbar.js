import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#d32f2f" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-home" style={{ fontSize: "18px", color: "white", marginRight: "10px" }}></i>
          TTT Celebrity-News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/newsfeed">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cinema">
                Cinema
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifestyle">
                Lifestyle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notifications">
                Notifications
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-light" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-light" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
