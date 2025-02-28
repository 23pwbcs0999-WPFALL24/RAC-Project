// Importing necessary modules
import React from "react";
import "./styles/Footer.css"; // Importing footer-specific CSS
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing social media icons from React Icons

export const Footer = () => {
  return (
    <div className="footer">
      {/* Social media icons */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/share/1BXcZs3eS6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/robo.auto__/?igsh=MXA1em8waGtzcTd4YQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Footer copyright text */}
      <p>
        &copy; 2024 Robotics And Automation Community (RAC). All Rights
        Reserved.
      </p>
    </div>
  );
};
