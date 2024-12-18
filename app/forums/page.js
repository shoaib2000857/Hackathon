'use client';
import * as React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';

export default function Forums() {
  const [courses, setCourses] = React.useState([]);
  const router = useRouter();
  const { user } = useUser();

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`/api/subjects`, {
        headers: {
          Authorization: `Bearer ${user.idToken}`,
        },
      });
      setCourses(response.data.map(subject => subject.name));
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  React.useEffect(() => {
    if (user) {
      fetchCourses();
    }
  }, [user]); // Add 'user' as a dependency

  const handleForumClick = (course) => {
    router.push(`/forums/${course}`);
  };

  return (
    <Container maxWidth="md" sx={{ backgroundColor: '#ffffff', color: '#A367B1' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Forums
      </Typography>
      <List>
        {courses.map((course, index) => (
          <ListItem component="button" key={index} onClick={() => handleForumClick(course)}>
            <ListItemText primary={course} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}