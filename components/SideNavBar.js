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

  const handleDashboard = () => {
    router.push('/dashboard');
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
          onClick={handleNotes}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText primary="Notes" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem
          component="button"
          onClick={handleLogout}
          sx={{
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
            },
            cursor: 'pointer',
          }}
        >
          <ListItemText primary="Logout" sx={{ color: '#ffffff' }} />
        </ListItem>
      </List>
    </Drawer>
  );
}