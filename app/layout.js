// app/layout.js
'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from '@/components/TopNavBar';
import SideNavBar from '@/components/SideNavBar';
import '@/app/globals.css';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/nextjs';

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

function AuthWrapper({ children }) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return children;
}

export default function RootLayout({ children }) {
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
            <AuthWrapper>
              <SignedIn>
                <SideNavBar />
                <main>{children}</main>
              </SignedIn>
              <SignedOut>
                <TopNavBar />
                <main>{children}</main>
              </SignedOut>
            </AuthWrapper>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}