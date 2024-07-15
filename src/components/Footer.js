import React from 'react';
import './Footer.css';

 export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>UrokodakiFoods</h3>
        <p>© {new Date().getFullYear()} UrokodakiFoods. All rights reserved.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
