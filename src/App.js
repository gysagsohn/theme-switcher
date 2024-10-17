// src/App.js
import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Light mode as default

  // Function to render different messages based on theme
  const renderText = () => {
    if (theme === 'light') {
      return "Welcome, just trying out different themes";
    } else if (theme === 'dark') {
      return "Aren't you glad you wasted 5min of your life";
    } else {
      return "It gets better";
    }
  };

  // Function to handle theme changes
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <nav className="navbar">
        <h1>Theme Switcher</h1>
      </nav>
      <div className="content">
        <p>{renderText()}</p>

        {/* Dropdown for theme switching */}
        <div className="theme-dropdown">
          <select 
            onChange={(e) => handleThemeChange(e.target.value)} 
            value={theme} 
            className="dropdown"
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="neon">Neon Mode</option>
          </select>
        </div>

        {/* Three buttons for theme switching */}
        <div className="theme-buttons">
          <button className="theme-button light" onClick={() => handleThemeChange('light')}>
            Light Mode
          </button>
          <button className="theme-button dark" onClick={() => handleThemeChange('dark')}>
            Dark Mode
          </button>
          <button className="theme-button neon" onClick={() => handleThemeChange('neon')}>
            Neon Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
