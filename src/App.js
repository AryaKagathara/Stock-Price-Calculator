import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RiskRewardCalculator from './components/RiskRewardCalculator';
import PricePercentageCalculator from './components/PricePercentageCalculator';
import PercentageDifferenceCalculator from './components/PercentageDifferenceCalculator';
import Default from './components/default';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('/risk-reward');  // Set default active tab

  // useNavigate hook must be inside the Router context
  const navigate = useNavigate(); // This hook helps to navigate programmatically

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab); // Navigate to the clicked tab's route
  };

  return (
    <div>
      <nav>
        <ul>
          <li
            className={activeTab === '/risk-reward' ? 'active' : ''}
            onClick={() => handleTabClick('/risk-reward')}
          >
            RRR
          </li>
          <li
            className={activeTab === '/price-percentage' ? 'active' : ''}
            onClick={() => handleTabClick('/price-percentage')}
          >
            T/SL
          </li>
          <li
            className={activeTab === '/percentage-difference' ? 'active' : ''}
            onClick={() => handleTabClick('/percentage-difference')}
          >
            Per%
          </li>
        </ul>
      </nav>
      <div className="calculator-container">
        <Routes>
          <Route path="/risk-reward" element={<RiskRewardCalculator />} />
          <Route path="/price-percentage" element={<PricePercentageCalculator />} />
          <Route path="/percentage-difference" element={<PercentageDifferenceCalculator />} />
          <Route path="/" element={<Default />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App /> {/* Ensure App is wrapped inside Router */}
    </Router>
  );
}
