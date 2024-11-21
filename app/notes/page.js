// app/notes/page.js
'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Notes() {
  const [notes, setNotes] = React.useState([]);
  const [username, setUsername] = React.useState(''); // Assume username is fetched from context or similar
  const router = useRouter();

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes`, {
        headers: {
          username: username,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  React.useEffect(() => {
    // Fetch username from local storage or context
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      fetchNotes();
    }
  }, []);

  const handleUploadPage = () => {
    router.push('/notes/upload');
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Notes
      </Typography>
      <Button variant="contained" color="primary" onClick={handleUploadPage}>
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