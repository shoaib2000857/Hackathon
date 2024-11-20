// components/SideNavBar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function SideNavBar({ onLogout }) {
  const router = useRouter();

  const handleDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <Drawer variant="permanent" anchor="left">
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
      <Button onClick={onLogout} style={{ margin: '20px' }}>
        Logout
      </Button>
    </Drawer>
  );
}