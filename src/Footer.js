// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.companyInfo}>
          <h3>Company Name</h3>
          <p>Making the world a better place through innovative design and technology.</p>
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>

        <div style={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div style={styles.socialMedia}>
          <h4>Follow Us</h4>
          <ul style={styles.socialList}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  companyInfo: {
    maxWidth: "400px",
  },
  linksSection: {
    maxWidth: "200px",
  },
  linkList: {
    listStyleType: "none",
    padding: 0,
  },
  linkListItem: {
    marginBottom: "10px",
  },
  socialMedia: {
    maxWidth: "200px",
  },
  socialList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  socialListItem: {
    marginBottom: "10px",
  },
};

export default Footer;
