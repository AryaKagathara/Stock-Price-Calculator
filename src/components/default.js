import React from 'react';
import welcomeImage from '../logo.svg'; // Adjust the path to your SVG file

const Default = () => {
  return (
    <div className="default-container">
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
      <h1>Stock Price Calculator</h1>
      <p>Calculate Risk Reward, Decide Target & StopLoss, Percentage Difference</p>
    </div>
  );
};

export default Default;
