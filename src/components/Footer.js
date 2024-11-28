import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content row">
          {/* About Us */}
          <div className="col-lg-3 col-md-6 footer-section">
  <h5 className="footer-title">About Us</h5>
  <p className="footer-text">
    Stay updated with the latest news, trends, and stories from the entertainment world. Your one-stop platform for celebrity updates and pop culture insights.
  </p>
</div>


          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#newsfeed">Newsfeed</a></li>
              <li><a href="#cinema">Cinema</a></li>
              <li><a href="#lifestyle">Lifestyle</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-lg-3 col-md-3 footer-section">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons d-flex flex-wrap">
              <a href="#facebook" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" aria-label="Twitter" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-3 col-md-6 footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="footer-contact">
              <li><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</li>
              <li><i className="fas fa-envelope"></i> support@celebritynews.com</li>
              <li><i className="fas fa-map-marker-alt"></i> 123 Celebrity Lane, Los Angeles</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center py-3">
        <p>&copy; 2024 Celebrity News. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
