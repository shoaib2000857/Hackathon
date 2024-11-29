// components/SideNavBar.js
import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '@clerk/nextjs';

export default function SideNavBar() {
  const router = useRouter();
  const theme = useTheme();
  const { signOut } = useAuth();
  const [highlightStyle, setHighlightStyle] = React.useState({});

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

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  const handleForums = () => {
    router.push('/forums');
  };

  const handleChatbot = () => {
    router.push('/chatbot');
  };

  const handleNotes = () => {
    router.push('/notes');
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  return (
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
          component="div"
          onClick={handleDashboard}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <ListItemText primary="Dashboard" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="div"
          onClick={handleChatbot}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <ListItemText primary="Chatbot" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="div"
          onClick={handleForums}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <ListItemText primary="Forums" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="div"
          onClick={handleNotes}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <ListItemText primary="Notes" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="div"
          onClick={handleLogout}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <ListItemText primary="Logout" sx={{ color: '#ffffff' }} />
        </ListItem>
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
          }}
        />
      </List>
    </Drawer>
  );
}