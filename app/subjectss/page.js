'use client';
import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const subjects = [
  { name: 'EDC', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
  { name: 'BEE', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
  { name: 'CAEG', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
  { name: 'EC', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
  { name: 'PPS', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
  { name: 'M & C', resources: ['Notes', 'Recorded Lecture', 'Mock Test', 'Previous Year Question'] },
];

export default function SubjectsPage() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', // Modern soft gradient background
        minHeight: '100vh',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: '#2C3E50', // Dark modern text color
            fontWeight: 'bold',
            marginBottom: { xs: 2, sm: 4 },
            background: 'linear-gradient(to right, #8e2de2, #4a00e0)', // Vibrant gradient text effect
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'glow 1.5s ease-in-out infinite alternate', // Animated text glow
            '@keyframes glow': {
              from: { textShadow: '0 0 10px #fff, 0 0 20px #8e2de2, 0 0 30px #4a00e0' },
              to: { textShadow: '0 0 20px #fff, 0 0 30px #8e2de2, 0 0 40px #4a00e0' },
            },
          }}
        >
          
          
        </Typography>

        <Grid container spacing={4}>
          {subjects.map((subject, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: { xs: 2, sm: 3 },
                  borderRadius: '24px',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
                  background: 'linear-gradient(145deg, #e6e6e6, #ffffff)', // Modern subtle gradient
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.3)',
                    transform: 'translateY(-10px)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    textAlign: 'center',
                    marginBottom: 2,
                    color: '#34495e',
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#8e2de2', // Color change on hover
                    },
                  }}
                >
                  {subject.name}
                </Typography>
                <Grid container spacing={2}>
                  {subject.resources.map((resource, resIndex) => (
                    <Grid item xs={12} key={resIndex}>
                      <Paper
                        sx={{
                          padding: 2,
                          borderRadius: '16px',
                          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
                          textAlign: 'center',
                          cursor: 'pointer',
                          background: '#f5f7fa', // Subtle background for resources
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, color 0.3s ease',
                          '&:hover': {
                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                            transform: 'scale(1.1)',
                            background: '#8e2de2', // Modern purple hover color
                            color: '#ffffff',
                          },
                        }}
                        aria-label={`Access ${resource} for ${subject.name}`}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: '500',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {resource}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
