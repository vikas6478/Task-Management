import React from 'react';
import '../CSS/footer.css'; // Import CSS file

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>What We Do</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Documentation</li>
            <li>API Access</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li>Task Assignment</li>
            <li>Real-time Updates</li>
            <li>Analytics & Reports</li>
            <li>User Management</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@taskflow.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Bhopal, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} TaskFlow. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
