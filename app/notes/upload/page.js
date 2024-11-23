// app/notes/upload/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function UploadNote() {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [fileUrl, setFileUrl] = React.useState('');
  const [courses, setCourses] = React.useState([]);
  const router = useRouter();
  const { user } = useUser();

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`/api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setCourses(response.data.map(subject => subject.name));
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  React.useEffect(() => {
    if (user) {
      fetchCourses();
    }
  }, [user]);

  const handleUploadNote = async () => {
    try {
      await axios.post('/api/notes/create', {
        title,
        content,
        course,
        uploadedBy: user.id,
        fileUrl,
      });
      router.push('/notes');
    } catch (error) {
      console.error('Error uploading note:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
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
        <InputLabel style={{ color: '#A367B1' }}>Course</InputLabel>
        <Select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          style={{ color: '#A367B1' }}
        >
          {courses.map((course) => (
            <MenuItem key={course} value={course}>
              {course}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="File URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <Button variant="contained" color="primary" onClick={handleUploadNote}>
        Upload Note
      </Button>
    </Container>
  );
}