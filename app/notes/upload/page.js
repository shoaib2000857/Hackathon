// app/notes/upload.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';

export default function UploadNote() {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [courses, setCourses] = React.useState([]);
  const [username, setUsername] = React.useState(''); // Assume username is fetched from context or similar
  const [file, setFile] = React.useState(null);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`/api/student/courses`, {
        headers: {
          username: username,
        },
      });
      setCourses([...response.data.courses, 'General']);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  React.useEffect(() => {
    // Fetch username from local storage or context
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      fetchCourses();
    }
  }, []);

  const handleUploadNote = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('course', course);
    formData.append('uploadedBy', username);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post('/api/notes/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Note uploaded successfully');
    } catch (error) {
      console.error('Error uploading note:', error);
      alert('Error uploading note. Please try again.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Note
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="course-label" style={{ color: '#A367B1' }}>Course</InputLabel>
        <Select
          labelId="course-label"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ color: '#A367B1' }}
        >
          {courses.map((course, index) => (
            <MenuItem key={index} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ margin: '20px 0', color: '#A367B1' }}
      />
      <Button variant="contained" color="primary" onClick={handleUploadNote}>
        Upload Note
      </Button>
    </Container>
  );
}