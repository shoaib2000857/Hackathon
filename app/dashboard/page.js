// app/dashboard/page.js
'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const courses = ['Course 1', 'Course 2', 'Course 3']; // Replace with actual course data

export default function Dashboard() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Courses
      </Typography>
      <List>
        {courses.map((course, index) => (
          <ListItem key={index}>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}