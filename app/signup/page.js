// app/signup/page.js
'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post('/api/signup', { username, password });
      router.push('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Signup
      </Button>
    </Container>
  );
}