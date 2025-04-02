import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = ({ isAuthenticated, onSignOut, toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-black" to="/">
          <img src="/assets/logo.png" alt="BookMyShow" style={{ width: "150px" }} />
        </Link>

        {/* Mobile Menu Button (Hamburger) ✅ */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }} // ✅ Background color when clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Search Bar (Always Visible) ✅ */}
        <div className="position-relative me-3 d-none d-lg-block">  {/* ✅ Hidden on small screens */}
          <FaSearch className="position-absolute text-secondary" style={{ left: "14px", top: "50%", transform: "translateY(-50%)" }} />
          <input 
            type="text" 
            placeholder="Search for movies, events..." 
            className="form-control ps-5 pe-3" 
            style={{ width: "220px", borderRadius: "20px", padding: "8px 12px" }}
          />
        </div>

        {/* Navbar Links (Collapsible) ✅ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">  
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold" to="/events">Events</Link>
            </li>
            <li className="nav-item me-4">  {/* ✅ Added spacing to push search bar away */}
              <Link className="nav-link text-black fw-bold" to="/sports">Sports</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Dark Mode, Sign In/Out ✅ */}
        <div className="d-flex align-items-center">
          {/* Dark Mode Toggle (Always Visible) */}
          <button 
            className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{ width: "40px", height: "40px" }}
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun className="text-black" /> : <FaMoon className="text-black" />}
          </button>

          {/* Sign In / Sign Out (Always Visible) */}
          {isAuthenticated ? (
            <button className="btn btn-danger px-3 fw-bold" onClick={onSignOut}>Sign Out</button>
          ) : (
            <Link to="/auth" className="btn btn-primary px-3 fw-bold">Sign In</Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
