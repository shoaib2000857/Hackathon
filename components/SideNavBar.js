// components/SideNavBar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SideNavBar({ onLogout }) {
  const router = useRouter();

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <Drawer variant="permanent" anchor="left" sx={{ '& .MuiDrawer-paper': { backgroundColor: '#000000', color: '#A367B1' } }}>
      <List>
        <ListItem button onClick={handleDashboard}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Timetable" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
      <Button onClick={onLogout} style={{ margin: '20px', color: '#A367B1' }}>
        Logout
      </Button>
    </Drawer>
  );
}