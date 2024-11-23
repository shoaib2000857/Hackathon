// app/layout.js
'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from '@/components/TopNavBar';
import SideNavBar from '@/components/SideNavBar';
import '@/app/globals.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7c00', // Orange color
    },
    secondary: {
      main: '#A367B1',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    allVariants: {
      color: '#333333',
    },
  },
});

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      router.push('/');
    }
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Learning Management System</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </head>
        <body>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SignedIn>
              <SideNavBar onLogout={handleLogout} />
              <main>{children}</main>
            </SignedIn>
            <SignedOut>
              <TopNavBar />
              <main>{children}</main>
            </SignedOut>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}