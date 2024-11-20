// components/TopNavBar.js
import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function TopNavBar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          LMS
        </Typography>
        <Button color="inherit" onClick={handleLogin}>
          Login
        </Button>
        <Button color="inherit" onClick={handleSignup}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}