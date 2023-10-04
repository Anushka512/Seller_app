// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import Card from '../Card/Card';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('New York');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
      <div className="container">
        <h1 className="centered-heading">Welcome to Our Page</h1>
        <p className="description">
          This is a description of our page. You can add more content here.
        </p>
        <div className='tabs'>
          <div className="tab-container">
            <div className={`tab ${activeTab === 'New York' ? 'active' : ''}`} onClick={() => handleTabClick('New York')}>New York</div>
            <div className={`tab ${activeTab === 'Mumbai' ? 'active' : ''}`} onClick={() => handleTabClick('Mumbai')}>Mumbai</div>
            <div className={`tab ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => handleTabClick('Paris')}>Paris</div>
            <div className={`tab ${activeTab === 'London' ? 'active' : ''}`} onClick={() => handleTabClick('London')}>London</div>
          </div>
          <button className="view-all-button">
            View All <span className="right-arrow">&#8594;</span>
          </button>
        </div>
      </div>
      <Card activeTab={activeTab} />
    </>
  );
};

export default HomePage;
