// src/Home.js
import React from 'react';
import logo from './assets/vtic.webp';

const Home = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src={logo} alt="VTIC Logo" className="logo-img"/>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/company">Company</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to VTIC</h1>
            <p>Your trusted IT solutions partner</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
