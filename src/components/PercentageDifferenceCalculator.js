import React, { useState } from 'react';
import '../App.css';  // Import your common CSS file

function PercentageDifferenceCalculator() {
  const [percentageDifference, setPercentageDifference] = useState(0.00);

  const handleSubmit = (e) => {
    e.preventDefault();

    const priceA = parseFloat(document.getElementById('priceA').value);
    const priceB = parseFloat(document.getElementById('priceB').value);

    if (isNaN(priceA) || isNaN(priceB) || priceA <= 0 || priceB <= 0) {
      alert('Please enter valid values for Price A and Price B.');
      return;
    }

    const diff = ((priceB - priceA) / priceA) * 100;
    setPercentageDifference(diff.toFixed(2));
  };

  return (
    <div className="calc-content">
      <h1 className="calc-h1">Percentage Difference</h1>
      <div className="container-pip-calc">
        <form id="percentageDiffForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="priceA">Price A</label>
            <input type="number" id="priceA" min="0" step="0.01" required />
            <label for="priceB">Price B</label>
            <input type="number" id="priceB" min="0" step="0.01" required />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <div className="calc-results">
          <p className="display-result-value">Percentage Difference:</p>
          <p className="display-final-resultc" id="resultPercentageDifference">{percentageDifference}%</p>
        </div>
      </div>
    </div>
  );
}

export default PercentageDifferenceCalculator;
