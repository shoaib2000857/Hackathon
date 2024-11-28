"use client";
import React, { useState } from "react";
import TypingAnimationDemo from './reviews/reviews.js';
import FadeTextDemo from './main_text/main_text.js';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import RainbowButtonDemo from './buttonn/buttonn.js';

export default function App() {
  return (
    <div>
      <div>
        {/* Landing Page with HTML as Background */}
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Ensures layering for the iframe
            flexDirection: "column", // Stacks the content vertically
          }}
        >
          {/* HTML Background as iframe */}
          <iframe
            src="/temp_home/icon.html" // Update path as necessary
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              zIndex: -1, // Keeps iframe behind the content
            }}
            title="Background HTML"
          ></iframe>
          
          {/* Render FadeTextDemo and RainbowButtonDemo */}
          <div style={{ textAlign: 'center' }}>
            <FadeTextDemo />
            {/* Add some margin-top to give space between the text and button */}
            <div style={{ marginTop: "200px" }}>
              <RainbowButtonDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Empower Your Future */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          py: 8,
          backgroundColor: "#f9f9f9",
          marginTop: "16px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Empower Your Future
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: 4 }}>
          Unlock the potential of quality education with EduLearn.
        </Typography>
      </Container>

      {/* Featured Courses */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Courses
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Introduction to Programming",
              description:
                "Learn the basics of programming with hands-on tutorials and real-world examples.",
              image: "https://placehold.co/300x200",
            },
            {
              title: "Chemistry Fundamentals",
              description:
                "Explore the fascinating world of chemistry with interactive lessons and experiments.",
              image: "https://placehold.co/300x200",
            },
            {
              title: "Virtual Reality in Education",
              description:
                "Discover how virtual reality is transforming the educational landscape.",
              image: "https://placehold.co/300x200",
            },
          ].map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={course.image}
                  alt={course.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container
        maxWidth="lg"
        sx={{ py: 11, backgroundColor: "#f9f9f9", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          What Our Students Say
        </Typography>
        <TypingAnimationDemo />
      </Container>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#FF5722",
          color: "#fff",
          textAlign: "center",
          padding: "16px 0",
          marginTop: "16px",
        }}
      >
        <Typography variant="body2">
          &copy; 2024 EduLearn. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
