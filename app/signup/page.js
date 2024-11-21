// app/signup/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const courses = ['Math', 'Science', 'History']; // Add more courses as needed

export default function Signup() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [selectedCourses, setSelectedCourses] = React.useState([]);
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post('/api/signup', { username, password, courses: selectedCourses });
      router.push('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const handleCourseChange = (event) => {
    setSelectedCourses(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
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
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: '#A367B1' }}>Courses</InputLabel>
        <Select
          multiple
          value={selectedCourses}
          onChange={handleCourseChange}
          style={{ color: '#A367B1' }}
        >
          {courses.map((course) => (
            <MenuItem key={course} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Signup
      </Button>
    </Container>
  );
}