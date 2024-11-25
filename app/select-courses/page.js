// app/select-courses/page.js
'use client';
import * as React from 'react';
import { Container, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

const courses = ['M&C', 'EC', 'EDC', 'CAEG', 'BEE','PPS']; // Add more courses as needed

export default function SelectCourses() {
  const [selectedCourses, setSelectedCourses] = React.useState([]);
  const router = useRouter();
  const { user } = useUser();

  const handleCourseChange = (event) => {
    setSelectedCourses(event.target.value);
  };

  const handleSaveCourses = async () => {
    try {
      await axios.post('/api/update-courses', { username: user.username, courses: selectedCourses });
      router.push('/dashboard');
    } catch (error) {
      console.error('Error updating courses:', error);
      alert('Error updating courses. Please try again.');
    }
  };

  React.useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Select Courses
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: '#FFA500' }}>Courses</InputLabel>
        <Select
          multiple
          value={selectedCourses}
          onChange={handleCourseChange}
          style={{ color: '#FFA500' }}
        >
          {courses.map((course) => (
            <MenuItem key={course} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSaveCourses}>
        Save Courses
      </Button>
    </Container>
  );
}