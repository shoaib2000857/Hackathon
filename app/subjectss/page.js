'use client';
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Grid, Paper, Button } from '@mui/material';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function subjectss() {
  const [subjects, setSubjects] = useState([]);
  const router = useRouter();
  const { user } = useUser();

  const fetchSubjects = async () => {
    try {
        console.log("ji");
      const response = await axios.get(`../api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
        
      });
      setSubjects(response.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchSubjects();
    }
  }, [user]);

  const handleChangeCourses = () => {
    router.push('/select-courses');
  };

  const taskManager = [
    { label: 'Attendance', value: '85%' },
    { label: 'Daily Assessment', value: 'In Progress' },
    { label: 'Performance', value: 'Good' },
  ];

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        height: '100vh', 
        backgroundColor: '#FFF9F0', 
        color: '#A367B1' 
      }}
    >
      {/* Main Content */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          flexGrow: 1, 
          padding: 2 
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Welcome to Maargdarshak
        </Typography>

        <Typography variant="h5" gutterBottom>
          Subjects
        </Typography>
        <Grid container spacing={3}>
          {subjects.map((subject, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ padding: 3, borderRadius: 1, boxShadow: 2 }}>
                <Typography variant="h6" component="h3">
                  {subject.name}
                </Typography>
                <List>
                  {subject.resources.map((resource, resourceIndex) => (
                    <ListItem key={resourceIndex}>
                      <ListItemText
                        primary={
                          <a
                            href="#"
                            style={{ color: '#e85f05', textDecoration: 'none' }}
                          >
                            {resource}
                          </a>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
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

        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleChangeCourses}>
            Change Courses
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
