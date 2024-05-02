import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-text">
        © 2024 PoggianMallta Tech. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
