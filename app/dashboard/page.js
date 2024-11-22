'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Grid, Paper } from '@mui/material';

const subjects = [
  { name: 'PPS', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
  { name: 'Basic Electrical Engineering (BEE)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
  { name: 'Electronic Devices and Circuits (EDC)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
  { name: 'Engineering Chemistry (EC)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
  { name: 'Matrices and Calculus (M&C)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
  { name: 'Computer-Aided Engineering Graphics (CAEG)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] }
];

const taskManager = [
  { label: 'Attendance', value: '85%' },
  { label: 'Daily Assessment', value: 'In Progress' },
  { label: 'Performance', value: 'Good' }
];

export default function Dashboard() {
  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Welcome to Maargdarshak
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <img src="logo.png" alt="Maargdarshak Logo" style={{ width: '80px', height: 'auto' }} />
      </Box>
      
      <Typography variant="h5" component="h2" gutterBottom>
        Announcements
      </Typography>
      <Paper sx={{ padding: 2, mb: 4, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
        <Typography>No new announcements</Typography>
      </Paper>

      <Typography variant="h5" component="h2" gutterBottom>
        Subjects
      </Typography>
      <Grid container spacing={3}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 1, boxShadow: 2 }}>
              <Typography variant="h6" component="h3">{subject.name}</Typography>
              <List>
                {subject.resources.map((resource, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={<a href="#" style={{ color: '#e85f05', textDecoration: 'none' }}>{resource}</a>} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
        Task Manager
      </Typography>
      <Paper sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
        <List>
          {taskManager.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${task.label}: ${task.value}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}