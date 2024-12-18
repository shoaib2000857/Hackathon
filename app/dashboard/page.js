'use client';
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  LinearProgress,
  Grid,
  CircularProgress,
  Avatar,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { useUser } from '@clerk/nextjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { user } = useUser();
  const [attendance, setAttendance] = useState(60); // Default attendance
  const [subjectScores, setSubjectScores] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        setSubjectScores([
          { subject: 'BEE', student: 80.5, average: 75.2, topper: 90.1 },
          { subject: 'EDC', student: 70.7, average: 68.3, topper: 85.6 },
          { subject: 'M & C', student: 85.9, average: 80.4, topper: 95.8 },
          { subject: 'CAEG', student: 65.4, average: 60.8, topper: 88.3 },
          { subject: 'PPS', student: 90.2, average: 85.7, topper: 100 },
          { subject: 'EC', student: 88.6, average: 82.5, topper: 96.2 },
        ]);
        setLoading(false);
      }, 1500); // Simulate network delay
    }
  }, [user]);

  const calculateOverall = (key) => {
    const total = subjectScores.reduce((sum, subject) => sum + subject[key], 0);
    return parseFloat((total / subjectScores.length).toFixed(1)); // Keep one decimal place
  };

  const overallPerformance = {
    student: calculateOverall('student'),
    average: calculateOverall('average'),
    topper: calculateOverall('topper'),
  };

  const getAttendanceColor = () => {
    if (attendance < 25) return 'darkred';
    if (attendance < 75) return 'orange';
    return 'green';
  };

  const overallChartData = {
    labels: ['Overall Performance'],
    datasets: [
      {
        label: 'Student Score',
        data: [overallPerformance.student],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Class Average',
        data: [overallPerformance.average],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Class Topper',
        data: [overallPerformance.topper],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const subjectChartData = (subject) => ({
    labels: ['Student', 'Class Average', 'Topper'],
    datasets: [
      {
        label: subject.subject,
        data: [subject.student, subject.average, subject.topper],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const chartStyle = { height: '400px' };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#FFF9F0',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#FFF9F0',
        color: '#A367B1',
      }}
    >
      {/* Profile Section in the Top Right */}
      {user && (
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 70, // Moved 50px to the left
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar src={user.profileImageUrl} alt={user.fullName} />
          <Typography variant="body1">{user.fullName}</Typography>
        </Box>
      )}

      {/* Centered Welcome Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          flexGrow: 1,
        }}
      >
        <Typography variant="h4" textAlign="center">
          Welcome to Maargdarshak
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ flexGrow: 1, padding: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Attendance
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
          <Typography variant="subtitle1" gutterBottom>
            Current Attendance: {attendance}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={attendance}
            sx={{
              height: 10,
              borderRadius: 1,
              backgroundColor: '#ddd',
              '& .MuiLinearProgress-bar': {
                backgroundColor: getAttendanceColor(),
              },
            }}
          />
        </Paper>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Overall Performance
        </Typography>
        <Paper sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
          <Box sx={chartStyle}>
            <Bar data={overallChartData} options={chartOptions} />
          </Box>
        </Paper>

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Subject-wise Performance
        </Typography>
        <Grid container spacing={3}>
          {subjectScores.map((subject, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
                <Typography variant="h6" textAlign="center" gutterBottom>
                  {subject.subject}
                </Typography>
                <Box sx={chartStyle}>
                  <Bar data={subjectChartData(subject)} options={chartOptions} />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
