import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import './NavBar.css';

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [highlightStyle, setHighlightStyle] = useState({
    top: 0,
    opacity: 0
  });
  const router = useRouter();
  const { signOut } = useAuth();

  // Updated navButtons array with the added "Compilers" button
  const navButtons = [
    { icon: 'palette', label: 'Dashboard', onClick: () => router.push('/dashboard') },
    { icon: 'heart', label: 'Resources', onClick: () => router.push('/subjectss') },
    // { icon: 'thumbtack', label: 'Forums', onClick: () => router.push('/forums') },
    { icon: 'chart-line', label: 'Recommendations', onClick: () => router.push('/recommendations') },
    { icon: 'cogs', label: 'Compilers', onClick: () => router.push('/complier') },
    { icon: 'images', label: 'Chatbot', onClick: () => router.push('/chatbot') },
 // Added Compilers Button
    { icon: 'sign-out-alt', label: 'Logout', onClick: async () => { await signOut(); router.push('/'); } }
  ];

  // Handle mouse enter for navigation highlighting
  const handleMouseEnter = (event, index) => {
    const { offsetTop, clientHeight } = event.currentTarget;
    setHighlightStyle({
      top: offsetTop,
      height: clientHeight,
      opacity: 1
    });
    setActiveIndex(index);
  };

  // Handle mouse leave for navigation highlighting
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
        aria-label="Toggle Navigation"
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
            onClick={button.onClick}
            aria-label={button.label}
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
