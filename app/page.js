import * as React from "react";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Main Heading */}
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        style={{ fontWeight: "bold", color: "#FF5722" }} // Orange color
      >
        LEARNING MADE EASY!
      </Typography>

      {/* Subheading */}
      <Typography 
        variant="h6" 
        component="p" 
        gutterBottom 
        style={{ color: "#4A4A4A" }}
      >
        India's first AI-powered LMS concentrated on engineering students.
      </Typography>

      {/* Secondary Heading */}
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        style={{ fontWeight: "bold", marginTop: "20px", color: "#3F51B5" }} // Blue color
      >
        MAARG DARSHAK
      </Typography>

      {/* Additional Text */}
      <Typography 
        variant="body1" 
        component="p" 
        style={{ fontStyle: "italic", marginTop: "20px", color: "#757575" }}
      >
        I'm ready to make my life easier
      </Typography>

      <Typography 
        variant="caption" 
        component="p" 
        style={{ marginTop: "10px", color: "#9E9E9E" }}
      >
        Leads to login page
      </Typography>
    </Container>
  );
}
