import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h2 className="about-title">About UrokodakiFoods</h2>
        
      </div>
      <div className="about-content">
        <p className="about-description">
          Welcome to UrokodakiFoods, where taste meets quality! We are committed to providing you with an exceptional food ordering experience.
        </p>
        <p className="about-mission">
          Our mission is simple: to deliver delicious meals made from the freshest ingredients, right to your doorstep. Whether you're craving pizza, burgers, pasta, or a healthy salad, we've got you covered!
        </p>
        <p className="about-values">
          At UrokodakiFoods, we value:
        </p>
        <ul className="about-values-list">
          <li>Freshness and quality in every dish we prepare</li>
          <li>Customer satisfaction and exceptional service</li>
          <li>Continuous improvement and innovation in our menu offerings</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
