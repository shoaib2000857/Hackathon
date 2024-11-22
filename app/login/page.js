// app/login/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate login (replace with actual server validation if needed)
    if (username === 'student' && password === 'password123') {
      localStorage.setItem('username', username);
      router.push('/dashboard');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img src="/logo.png" alt="Maargadarshak Logo" />
      </div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Maargadarshak
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username or Email"
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
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </form>
    </div>
  );
}