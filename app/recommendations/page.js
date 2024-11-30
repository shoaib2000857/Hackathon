// app/recommendations/page.js
'use client';
import * as React from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export default function Recommendations() {
  const [query, setQuery] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [subjects, setSubjects] = React.useState([]);
  const [explanation, setExplanation] = React.useState('');
  const [recommendations, setRecommendations] = React.useState([]);
  const { user } = useUser();

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(`/api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setSubjects(response.data.map(subject => subject.name));
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  React.useEffect(() => {
    if (user) {
      fetchSubjects();
    }
  }, [user]);

  const handleRecommend = async () => {
    try {
      const response = await axios.post('/api/recommendations', { query, subject });
      setExplanation(response.data.explanation);
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Recommend Material
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: '#A367B1' }}>Subject</InputLabel>
        <Select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ color: '#A367B1' }}
        >
          {subjects.map((subject) => (
            <MenuItem key={subject} value={subject}>
              {subject}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Topic"
        variant="outlined"
        fullWidth
        margin="normal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputLabelProps={{ style: { color: '#A367B1' } }}
        InputProps={{ style: { color: '#A367B1' } }}
      />
      <Button variant="contained" color="primary" onClick={handleRecommend}>
        Get Recommendations
      </Button>
      {explanation && (
        <Typography variant="body1" component="p" gutterBottom>
          {explanation}
        </Typography>
      )}
      <List>
        {recommendations.map((recommendation, index) => (
          <ListItem key={index}>
            <ListItemText primary={<a href={recommendation} target="_blank" rel="noopener noreferrer" style={{ color: '#A367B1' }}>{recommendation}</a>} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}