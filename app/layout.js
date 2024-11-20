// app/layout.js
'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from '/components/TopNavBar';
import SideNavBar from '/components/SideNavBar';
import '/app/globals.css';

const theme = createTheme();

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      router.push('/');
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Learning Management System</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoggedIn ? <SideNavBar onLogout={handleLogout} /> : <TopNavBar />}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}