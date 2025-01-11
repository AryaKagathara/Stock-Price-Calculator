import React, { useState } from 'react';
import '../App.css';  // Import your common CSS file

function PricePercentageCalculator() {
  const [targetPrice, setTargetPrice] = useState(0.00);
  const [stopLossPrice, setStopLossPrice] = useState(0.00);

  const handleSubmit = (e) => {
    e.preventDefault();

    const buyPrice = parseFloat(document.getElementById('buyPrice').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(buyPrice) || isNaN(percentage) || buyPrice <= 0 || percentage <= 0) {
      alert('Please enter valid values for Buy Price and Percentage.');
      return;
    }

    const targetPriceCalc = buyPrice * (1 + percentage / 100);
    const stopLossPriceCalc = buyPrice * (1 - percentage / 100);

    setTargetPrice(targetPriceCalc.toFixed(2));
    setStopLossPrice(stopLossPriceCalc.toFixed(2));
  };

  return (
    <div className="calc-content">
      <h1 className="calc-h1">Price Percentage</h1>
      <div className="container-pip-calc">
        <form id="priceCalculatorForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="buyPrice">Entry Price</label>
            <input type="number" id="buyPrice" min="0" step="0.01" required />
            <label for="percentage">Percentage (%)</label>
            <input type="number" id="percentage" min="0" step="0.01" required />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <div className="calc-results">
          <p className="display-result-value">Target Price ⬆</p>
          <p className="display-final-resultc" id="resultTargetPrice">{targetPrice}</p>
          <p className="display-result-value">Stoploss Price ⬇</p>
          <p className="display-final-resultc" id="resultStopLossPrice">{stopLossPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default PricePercentageCalculator;
