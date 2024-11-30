import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({
    top: 0,
    opacity: 0
  });

  const navButtons = [
    { icon: 'palette', label: 'Dashboard' },
    { icon: 'images', label: 'Chatbot' },
    { icon: 'thumbtack', label: 'Formus' },
    { icon: 'book', label: 'Subjects' }, // Added "Subjects"
    { icon: 'chart-line', label: 'Logout' }
  ];

  const handleMouseEnter = (event, index) => {
    const { offsetTop, clientHeight } = event.currentTarget;
    setHighlightStyle({
      top: offsetTop,
      height: clientHeight,
      opacity: 1
    });
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setHighlightStyle({
      top: 0,
      opacity: 0,
      height: 0
    });
    setActiveIndex(null);
  };

  return (
    <div id="nav-bar">
      <input
        id="nav-toggle"
        type="checkbox"
        checked={navToggle}
        onChange={() => setNavToggle(!navToggle)}
      />
      
      <div id="nav-header">
        <div id="nav-title">Maargdarshak</div>
        <hr />
      </div>
      
      <div id="nav-content">
        {navButtons.map((button, index) => (
          <div
            key={index}
            className={`nav-button ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <i className={`fas fa-${button.icon}`} />
            <span>{button.label}</span>
          </div>
        ))}
        
        <div 
          id="nav-content-highlight"
          style={{
            top: highlightStyle.top,
            height: highlightStyle.height,
            opacity: highlightStyle.opacity,
            background: '#FFF9F0', // Soft blue highlight
            transition: 'all 0.2s ease'
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
