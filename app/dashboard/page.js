// // app/dashboard/page.js
// 'use client';
// import * as React from 'react';
// import { Container, Typography, List, ListItem, ListItemText, Box, Grid, Paper, Button } from '@mui/material';
// import { useRouter } from 'next/navigation';

// const subjects = [
//   { name: 'PPS', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
//   { name: 'Basic Electrical Engineering (BEE)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
//   { name: 'Electronic Devices and Circuits (EDC)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
//   { name: 'Engineering Chemistry (EC)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
//   { name: 'Matrices and Calculus (M&C)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] },
//   { name: 'Computer-Aided Engineering Graphics (CAEG)', resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'] }
// ];

// const taskManager = [
//   { label: 'Attendance', value: '85%' },
//   { label: 'Daily Assessment', value: 'In Progress' },
//   { label: 'Performance', value: 'Good' }
// ];

// export default function Dashboard() {
//   const router = useRouter();

//   const handleChangeCourses = () => {
//     router.push('/select-courses');
//   };

//   return (
//     <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Welcome to Maargdarshak
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//         <img src="logo.png" alt="Maargdarshak Logo" style={{ width: '80px', height: 'auto' }} />
//       </Box>
      
//       <Typography variant="h5" component="h2" gutterBottom>
//         Announcements
//       </Typography>
//       <Paper sx={{ padding: 2, mb: 4, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
//         <Typography>No new announcements</Typography>
//       </Paper>

//       <Typography variant="h5" component="h2" gutterBottom>
//         Subjects
//       </Typography>
//       <Grid container spacing={3}>
//         {subjects.map((subject, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper sx={{ padding: 3, borderRadius: 1, boxShadow: 2 }}>
//               <Typography variant="h6" component="h3">{subject.name}</Typography>
//               <List>
//                 {subject.resources.map((resource, index) => (
//                   <ListItem key={index}>
//                     <ListItemText primary={<a href="#" style={{ color: '#e85f05', textDecoration: 'none' }}>{resource}</a>} />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
//         Task Manager
//       </Typography>
//       <Paper sx={{ padding: 2, backgroundColor: '#f4f4f4', borderRadius: 1 }}>
//         <List>
//           {taskManager.map((task, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={`${task.label}: ${task.value}`} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>

//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//         <Button variant="contained" color="primary" onClick={handleChangeCourses}>
//           Change Courses
//         </Button>
//       </Box>
//     </Container>
//   );
// }
// app/dashboard/page.js
'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Grid, Paper, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const [subjects, setSubjects] = React.useState([]);
  const router = useRouter();
  const { user } = useUser();

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(`/api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setSubjects(response.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  React.useEffect(() => {
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
    { label: 'Performance', value: 'Good' }
  ];

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

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleChangeCourses}>
          Change Courses
        </Button>
      </Box>
    </Container>
  );
}