// components/TopNavBar.js
import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

export default function TopNavBar() {
  const router = useRouter();
  const theme = useTheme();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>
          LMS
        </Typography>
        <Button color="inherit" onClick={handleLogin} sx={{ color: '#ffffff' }}>
          Login
        </Button>
        <Button color="inherit" onClick={handleSignup} sx={{ color: '#ffffff' }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}