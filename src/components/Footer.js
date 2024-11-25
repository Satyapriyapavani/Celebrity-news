
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container py-3">
        <div className="d-flex flex-wrap justify-content-between align-items-start text-center text-md-start">
        
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              Bringing you the latest updates and trending stories from the entertainment world. Your go-to platform for celebrity news and pop culture.
            </p>
          </div>

          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#newsfeed" className="footer-link">Newsfeed</a></li>
              <li><a href="#cinema" className="footer-link">Cinema</a></li>
              <li><a href="#lifestyle" className="footer-link">Lifestyle</a></li>
              <li><a href="#privacy-policy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

         
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#facebook" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="social-icon" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

         
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> support@celebritynews.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 123 Celebrity Lane, Los Angeles, CA</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-2">
        <p>&copy; 2024 Celebrity News. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
