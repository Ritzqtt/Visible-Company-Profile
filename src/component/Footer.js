import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Visible Technologies International</h3>
          <p>Transforming businesses through innovative IT solutions.</p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: sales@vtic.ph</p>
          <p>Phone: 09497402779 / 09174655234</p>
          <p>Telephone: (02) 8244 6562</p>
        </div>

        <div className="footer-section">
          <h4>Address</h4>
          <p>1GF Unit 102 Ridgewood Towers 3, C5 (Northbound)</p>
          <p>Ususan Taguig City 1639</p>
        </div>

        <div className="footer-section footer-socmed">
          <h4>Follow us on:</h4>
          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/visibletechintlcorp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" fill="currentColor" />
              </svg>
              Facebook
            </a>

            <a
              href="https://www.instagram.com/visibletechintlcorp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/company/visibletechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 8.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3V10Zm5 0h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.6V20h-3v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20h-3V10Z" fill="currentColor" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;