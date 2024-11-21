// components/SideNavBar.js
import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SideNavBar({ onLogout }) {
  const router = useRouter();

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
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        <ListItem button onClick={handleDashboard}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleChatbot}>
          <ListItemText primary="Chatbot" />
        </ListItem>
        <ListItem button onClick={handleNotes}>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem button onClick={onLogout}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}