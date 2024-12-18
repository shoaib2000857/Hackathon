'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, Box } from '@mui/material';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export default function Forum() {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const { course } = useParams();
  const { user } = useUser();
  const router = useRouter();

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`/api/forums/${course}`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  React.useEffect(() => {
    fetchMessages();
  }, [course, user]); // Add 'user' as a dependency

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, user: user.id, course };

    try {
      await axios.post(`/api/forums/${course}`, newMessage, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setInput('');
      fetchMessages(); // Fetch messages again to update the list
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {course} Forum
      </Typography>
      <List sx={{ maxHeight: '400px', overflow: 'auto', backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '10px' }}>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message.text} secondary={message.user} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        margin="normal"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
}