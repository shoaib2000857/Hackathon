// app/chatbot/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [file, setFile] = React.useState(null);

  const handleSendMessage = async () => {
    if (input.trim() === '' && !file) return;

    const newMessage = { text: input, file: file ? file.name : null };
    setMessages([...messages, newMessage]);

    // Send message to Gemini API
    try {
      const response = await axios.post('/api/chatbot', { message: input });
      const botResponse = response.data.reply;
      setMessages([...messages, newMessage, { text: botResponse, isBot: true, isMarkdown: true }]);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    }

    setInput('');
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#000000', color: '#A367B1', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chatbot
      </Typography>
      <List sx={{ maxHeight: '400px', overflow: 'auto', backgroundColor: '#1a1a1a', borderRadius: '8px', padding: '10px' }}>
        {messages.map((message, index) => (
          <ListItem key={index} sx={{ justifyContent: message.isBot ? 'flex-start' : 'flex-end' }}>
            {message.isMarkdown ? (
              <ListItemText
                primary={<ReactMarkdown>{message.text}</ReactMarkdown>}
                secondary={message.file ? `File: ${message.file}` : null}
                sx={{ backgroundColor: message.isBot ? '#333333' : '#444444', borderRadius: '8px', padding: '10px', color: '#A367B1' }}
              />
            ) : (
              <ListItemText
                primary={message.text}
                secondary={message.file ? `File: ${message.file}` : null}
                sx={{ backgroundColor: message.isBot ? '#333333' : '#444444', borderRadius: '8px', padding: '10px', color: '#A367B1' }}
              />
            )}
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
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{
          style: { color: '#A367B1' },
          endAdornment: (
            <IconButton component="label" style={{ color: '#A367B1' }}>
              <AttachFile />
              <input type="file" hidden onChange={handleFileChange} />
            </IconButton>
          ),
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
}