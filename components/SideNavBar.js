import React, { useState, useRef } from 'react';
import './NavBar.css'; // Ensure your CSS file is imported
import { Icon } from '@mui/material';

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [footerToggle, setFooterToggle] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  const handleFooterToggle = () => {
    setFooterToggle(!footerToggle);

  const handleForums = () => {
    router.push('/forums');
  };

  const handleMouseEnter = (event) => {
    const { offsetTop, clientHeight } = event.currentTarget;
    setHighlightStyle({
      top: offsetTop,
      height: clientHeight,
      transition: 'top 0.3s ease-in-out, height 0.3s ease-in-out',
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle({
      top: '-100%',
      height: 0,
      transition: 'top 0.3s ease-in-out, height 0.3s ease-in-out',
    });
  };

  const navButtons = [
    { label: 'Dashboard' },
    { label: 'Chatbot' },
    {  label: 'Forums' },
    { label: 'Notes' },
    {  label: 'Logout' },
  ];

  return (
    <div id="nav-bar">
      <input
        id="nav-toggle"
        type="checkbox"
        checked={navToggle}
        onChange={handleNavToggle}
      />
      <div id="nav-header">
        <a id="nav-title" href="https://codepen.io" target="_blank" rel="noopener noreferrer">
          Maargdarshak
        </a>
        <label htmlFor="nav-toggle"></label>
        <hr />
      </div>
      <div id="nav-content">
        {navButtons.map((button, index) => (
          <div
            key={index}
            className="nav-button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Icon>{button.icon}</Icon>
            <span>{button.label}</span>
          </div>
        ))}
        <div
          id="nav-content-highlight"
          style={{
            position: 'absolute',
            left: '16px',
            top: `${highlightStyle.top}px`,
            height: `${highlightStyle.height}px`,
            width: 'calc(100% - 16px)',
            background: 'blue',
            borderRadius: '8px',
            transition: highlightStyle.transition,
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
          color: '#ffffff',
        },
      }}
    >
      <List>
        <ListItem
          component="button"
          onClick={handleDashboard}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText primary="Dashboard" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="button"
          onClick={handleChatbot}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText primary="Chatbot" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="button"
          onClick={handleForums}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText primary="Forums" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="button"
          onClick={handleNotes}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        />
      </div>
      <input
        id="nav-footer-toggle"
        type="checkbox"
        checked={footerToggle}
        onChange={handleFooterToggle}
      />
    </div>
  );
};

export default NavBar;
