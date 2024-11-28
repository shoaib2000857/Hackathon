// app/chatbot/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '@mui/material/styles';

export default function Chatbot() {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [file, setFile] = React.useState(null);
  const theme = useTheme();

  React.useEffect(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '' && !file) return;

    const newMessage = { text: input, file: file ? file.name : null, isBot: false };
    setMessages([...messages, newMessage]);

    // Send message to Gemini API with history
    try {
      const response = await axios.post('/api/chatbot', { message: input, history: messages });
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

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem('chatMessages');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#f4f4f4', color: theme.palette.text.primary, padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Chatbot
      </Typography>
      <List sx={{ maxHeight: '400px', overflow: 'auto', backgroundColor: '#1a1a1a', borderRadius: '8px', padding: '10px' }}>
        {messages.map((message, index) => (
          <ListItem key={index} sx={{ justifyContent: message.isBot ? 'flex-start' : 'flex-end' }}>
            {message.isMarkdown ? (
              <ListItemText
                primary={<ReactMarkdown>{message.text}</ReactMarkdown>}
                secondary={message.file ? `File: ${message.file}` : null}
                sx={{ backgroundColor: message.isBot ? '#ffffff' : '#ffffff', borderRadius: '8px', padding: '10px', color: '#ffffff' }}
              />
            ) : (
              <ListItemText
                primary={message.text}
                secondary={message.file ? `File: ${message.file}` : null}
                sx={{ backgroundColor: message.isBot ? '#ffffff' : '#ffffff', borderRadius: '8px', padding: '10px', color: '#ffffff' }}
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
        onKeyPress={handleKeyPress}
        InputLabelProps={{ style: { color: theme.palette.text.primary } }}
        InputProps={{
          style: { color: theme.palette.text.primary },
          endAdornment: (
            <IconButton component="label" style={{ color: theme.palette.text.primary }}>
              <AttachFile />
              <input type="file" hidden onChange={handleFileChange} />
            </IconButton>
          ),
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
        <Button variant="contained" color="primary" onClick={handleClearChat} sx={{ backgroundColor: theme.palette.primary.main }}>
          Clear Chat
        </Button>
      </Box>
    </Container>
  );
}