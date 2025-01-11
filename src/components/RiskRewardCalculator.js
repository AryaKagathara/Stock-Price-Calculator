import React, { useState } from 'react';
import '../App.css';  // Import your common CSS file

function RiskRewardCalculator() {
  const [riskReward, setRiskReward] = useState('0:0');
  const [breakEven, setBreakEven] = useState('0.0%');

  const handleSubmit = (e) => {
    e.preventDefault();

    const stopLossPrice = parseFloat(document.getElementById('stopLossPrice').value);
    const entryPrice = parseFloat(document.getElementById('entryPrice').value);
    const takeProfitPrice = parseFloat(document.getElementById('takeProfitPrice').value);

    if (isNaN(stopLossPrice) || isNaN(entryPrice) || isNaN(takeProfitPrice)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    if (stopLossPrice <= 0 || entryPrice <= 0 || takeProfitPrice <= 0) {
      alert('All prices must be greater than zero.');
      return;
    }

    const risk = Math.abs(entryPrice - stopLossPrice);
    const reward = Math.abs(takeProfitPrice - entryPrice);

    let riskRewardRatio;
    if (risk > 0 && reward > 0) {
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const divisor = gcd(risk, reward);
      const simplifiedRisk = risk / divisor;
      const simplifiedReward = reward / divisor;

      riskRewardRatio = `${simplifiedReward}:${simplifiedRisk}`;
    } else {
      riskRewardRatio = "0:0";
    }

    const breakEvenWinRate = reward > 0 ? ((1 / (1 + reward / risk)) * 100).toFixed(2) : 0;

    setRiskReward(riskRewardRatio);
    setBreakEven(breakEvenWinRate + '%');
  };

  return (
    <div className="calc-content">
      <h1 className="calc-h1">Risk Reward Ratio</h1>
      <div className="container-pip-calc">
        <form id="riskRewardCalculatorForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="takeProfitPrice">Target Price</label>
            <input type="number" id="takeProfitPrice" min="0" step="0.0001" required />
            <label for="entryPrice">Entry Price</label>
            <input type="number" id="entryPrice" min="0" step="0.0001" required />
            <label for="stopLossPrice">Stop Loss Price</label>
            <input type="number" id="stopLossPrice" min="0.0000" step="0.0001" required />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <div className="calc-results">
          <p className="display-result-value">Ratio:</p>
          <p className="display-final-resultc" id="resultRiskReward">{riskReward}</p>
          <p className="display-result-value">Breakeven Win Rate:</p>
          <p className="display-final-resultc" id="resultBreakEven">{breakEven}</p>
        </div>
      </div>
    </div>
  );
}

export default RiskRewardCalculator;
