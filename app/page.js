import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";

export default function App() {
  return (
    <div>
      {/* Landing Page with HTML as Background */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Important for layering the iframe behind
        }}
      >
        {/* HTML Background as iframe */}
        <iframe
          src="/temp_home/icon.html"  // Replace with your actual HTML file location
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            zIndex: -1, // Keeps the iframe behind your content
          }}
          title="Background HTML"
        ></iframe>

        {/* Content on Top of the HTML Background */}
        <Typography
          variant="h2"
          style={{
            color: "#ffffff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            zIndex: 1, // Content should be on top
          }}
        >
          Welcome to Maargadarshak
        </Typography>
      </div>

      {/* Hero Section */}
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
        sx={{ py: 8, backgroundColor: "#f9f9f9", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          What Our Students Say
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: "Alex Johnson",
              quote:
                "EduLearn has changed my life! The courses are engaging and informative.",
              avatar: "https://placehold.co/100x100",
            },
            {
              name: "Maria Smith",
              quote:
                "I love the interactive lessons! They make learning so much fun.",
              avatar: "https://placehold.co/100x100",
            },
            {
              name: "John Doe",
              quote:
                "The community at EduLearn is amazing. I've made so many friends!",
              avatar: "https://placehold.co/100x100",
            },
          ].map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: "center", padding: 2 }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - {testimonial.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
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
