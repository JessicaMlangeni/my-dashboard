// App.js
import React, { useState } from 'react';
import LandingPage from "./pages/LandingPage"; // 
import Charts from './components/Charts';
import KpiCards from './components/KpiCards';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import TransactionHistory from './components/TransactionHistory';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('landing'); // S

    const handleArrowClick = () => {
        if (currentPage === 'landing') {
            setCurrentPage('dashboard'); // it changes to second page
        } else {
            setCurrentPage('landing'); // Optionally allow returning to the landing page
        }
    };

    return (
        <div className="App">
            {currentPage === 'landing' ? (
                <LandingPage onArrowClick={handleArrowClick} />
            ) : (
                <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <KpiCards />
        
        <div className="charts-container">
          <div className="chart">
            <Charts />
          </div>
        </div>

        <ProductList />
        <TransactionHistory />
      </div>
    </div>
            )}
            {/* Optionally we can include the arrow for navigation */}
            <div className="arrow" onClick={handleArrowClick} style={{ cursor: 'pointer', textAlign: 'center', marginTop: '20px' }}>
                ➔ {/* arrow character, can be replaced with SVG or icon.Up to us */}
            </div>
        </div>
    );
}

export default App;
