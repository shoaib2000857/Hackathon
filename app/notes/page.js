'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function Notes() {
  const [notes, setNotes] = React.useState([]);
  const router = useRouter();
  const { user } = useUser();

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`/api/notes`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  React.useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]); // Add 'user' as a dependency

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