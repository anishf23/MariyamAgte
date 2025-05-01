import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="text-center py-4 bg-light mt-5 border-top">
    <div className="container">
      <div className="row">
        
        {/* Contact Address */}
        <div className="col-md-3 mb-3">
          <h5>Contact Address</h5>
          <p>
            Mariyam Agate Headquarters<br />
            Teen Limdi, Chudival Chakla,<br />
            Karbasia Pada, Khambhat<br />
            Gujarat, India - 388620<br />
            Email: info@mariyamagate.com
          </p>
        </div>

        {/* Connect Us */}
        <div className="col-md-3 mb-3">
          <h5>Connect With Us</h5>
          <ul className="list-unstyled">
            <li><a href="https://wa.me/+917016256342?text=Hello%2C%20I%20am%20a%20wholesaler%20of%20stone%20and%20crystal%20products.%20I%20would%20like%20to%20share%20our%20catalogue%20and%20pricing%20with%20you.%20Please%20let%20me%20know%20if%20you%27re%20interested." target="_blank" rel="noopener noreferrer" style={{ color: '#A4663B' }}>WhatsApp</a></li>
            <li><a href="tel:+917016256342" style={{ color: '#A4663B' }}>Call Us</a></li>
            <li><a href="https://www.instagram.com/mariyam_agate92/" target="_blank" rel="noopener noreferrer" style={{ color: '#A4663B' }}>Facebook</a></li>
            <li><a href="https://www.instagram.com/mariyam_agate92/" target="_blank" rel="noopener noreferrer" style={{ color: '#A4663B' }}>Instagram</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="col-md-3 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link to="/" style={{ color: '#A4663B' }}>Home</Link></li>
            <li><Link to="/new-arrivals" style={{ color: '#A4663B' }}>All Products</Link></li>
            <li><Link to="/about" style={{ color: '#A4663B' }}>About Us</Link></li>
            <li><Link to="/contact" style={{ color: '#A4663B' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Top Stones */}
        <div className="col-md-3 mb-3">
          <h5>Top Products</h5>
          <ul className="list-unstyled">
            <li><Link to="/new-arrivals" style={{ color: '#A4663B' }}>Bracelet</Link></li>
            <li><Link to="/new-arrivals" style={{ color: '#A4663B' }}>Crystal Tree</Link></li>
            <li><Link to="/new-arrivals" style={{ color: '#A4663B' }}>Laxmi Yantra Pyramid</Link></li>
            <li><Link to="/new-arrivals" style={{ color: '#A4663B' }}>Cluster & Geodes</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4">
        <p>&copy; 2025 Mariyam Agate. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

