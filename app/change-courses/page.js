// app/change-courses/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const availableCourses = ['Course 1', 'Course 2', 'Course 3']; // Replace with actual course data

export default function ChangeCourses() {
  const [username, setUsername] = React.useState('');
  const [selectedCourses, setSelectedCourses] = React.useState([]);
  const router = useRouter();

  const handleCourseChange = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  const handleUpdateCourses = async () => {
    try {
      await axios.post('/api/change-courses', { username, courses: selectedCourses });
      alert('Courses updated successfully');
    } catch (error) {
      console.error('Error updating courses:', error);
      alert('Error updating courses. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Change Courses
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
      <FormGroup>
        {availableCourses.map((course) => (
          <FormControlLabel
            key={course}
            control={
              <Checkbox
                checked={selectedCourses.includes(course)}
                onChange={() => handleCourseChange(course)}
                style={{ color: '#A367B1' }}
              />
            }
            label={course}
          />
        ))}
      </FormGroup>
      <Button variant="contained" color="primary" onClick={handleUpdateCourses}>
        Update Courses
      </Button>
    </Container>
  );
}