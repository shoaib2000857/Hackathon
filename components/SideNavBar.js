// components/SideNavBar.js
import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

export default function SideNavBar({ onLogout }) {
  const router = useRouter();
  const theme = useTheme();

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  const handleChatbot = () => {
    router.push('/chatbot');
  };

  const handleNotes = () => {
    router.push('/notes');
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
        <ListItem button onClick={handleDashboard}>
          <ListItemText primary="Dashboard" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem button onClick={handleChatbot}>
          <ListItemText primary="Chatbot" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem button onClick={handleNotes}>
          <ListItemText primary="Notes" sx={{ color: '#ffffff' }} />
        </ListItem>
        <ListItem button onClick={onLogout}>
          <ListItemText primary="Logout" sx={{ color: '#ffffff' }} />
        </ListItem>
      </List>
    </Drawer>
  );
}