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

  const navButtons = [
    { icon: 'palette', label: 'Dashboard', onClick: () => router.push('/dashboard') },
    { icon: 'images', label: 'Chatbot', onClick: () => router.push('/chatbot') },
    { icon: 'thumbtack', label: 'Forums', onClick: () => router.push('/forums') },
    { icon: 'heart', label: 'Subjects', onClick: () => router.push('/subjectss') },
    { icon: 'chart-line', label: 'Recommendations', onClick: () => router.push('/recommendations') },
    { icon: 'sign-out-alt', label: 'Logout', onClick: async () => { await signOut(); router.push('/'); } }
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
            onClick={button.onClick}
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