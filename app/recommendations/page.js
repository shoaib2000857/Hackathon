'use client';
import * as React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export default function Recommendations() {
  const [query, setQuery] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [subjects, setSubjects] = React.useState([]);
  const [explanation, setExplanation] = React.useState('');
  const [recommendations, setRecommendations] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
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
      setError('Failed to load subjects. Please try again later.');
      setSnackbarOpen(true);
    }
  };

  React.useEffect(() => {
    if (user) {
      fetchSubjects();
    }
  }, [user]); // Add 'user' as a dependency

  const handleRecommend = async () => {
    setError('');
    setExplanation('');
    setRecommendations([]);
    setLoading(true);
    try {
      const response = await axios.post('/api/recommendations', { query, subject });
      setExplanation(response.data.explanation);
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Failed to fetch recommendations. Please try again.');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Recommend Material
      </Typography>
      {user && (
        <Typography variant="h6" component="p" gutterBottom>
          Welcome, {user.firstName || 'User'}!
        </Typography>
      )}
      <FormControl fullWidth margin="normal">
        <InputLabel>Subject</InputLabel>
        <Select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {subjects.length > 0 ? (
            subjects.map((subject) => (
              <MenuItem key={subject} value={subject}>
                {subject}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No subjects available</MenuItem>
          )}
        </Select>
      </FormControl>
      <TextField
        label="Topic"
        variant="outlined"
        fullWidth
        margin="normal"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputLabelProps={{ style: { color: '#000000' } }} // Label in black
        InputProps={{ style: { color: '#000000' } }} // Input text in black
      />
      <Button
        variant="contained"
        color="#000000"
        onClick={handleRecommend}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Get Recommendations'}
      </Button>
      {explanation && (
        <Typography variant="body1" component="p" gutterBottom>
          {explanation}
        </Typography>
      )}
      <List>
        {recommendations.map((recommendation, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <a
                  href={recommendation}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#A367B1', textDecoration: 'underline' }}
                >
                  {recommendation}
                </a>
              }
            />
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />
    </Container>
  );
}