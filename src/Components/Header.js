import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';
const Header = () => {
  
  return (
    <><div className="custom-warning text-center py-1">
      <strong>Free Shipping on Purchase of over Rs. 2000 (Prepaid Orders)</strong>
    </div><nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">🛍️ Mariyam Agate</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/new-arrivals">All Products</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav></>
  );
  
};

export default Header;
