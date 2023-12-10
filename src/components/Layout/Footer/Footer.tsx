// Footer.tsx

import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="movie-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="column-title">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            cursus convallis malesuada.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 Your Movie Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
