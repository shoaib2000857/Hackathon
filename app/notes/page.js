// app/notes/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

export default function Notes() {
  const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [course, setCourse] = React.useState(''); // Assume course is selected from a dropdown or similar
  const [username, setUsername] = React.useState(''); // Assume username is fetched from context or similar
  const [file, setFile] = React.useState(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes/${course}`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

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
      fetchNotes();
    } catch (error) {
      console.error('Error uploading note:', error);
    }
  };

  React.useEffect(() => {
    if (course) {
      fetchNotes();
    }
  }, [course]);

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Notes
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
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ margin: '20px 0', color: '#A367B1' }}
      />
      <Button variant="contained" color="primary" onClick={handleUploadNote}>
        Upload Note
      </Button>
      <List>
        {notes.map((note) => (
          <ListItem key={note._id}>
            <ListItemText
              primary={note.title}
              secondary={
                <>
                  {note.content}
                  {note.fileUrl && (
                    <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">
                      Download File
                    </a>
                  )}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}