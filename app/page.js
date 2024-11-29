"use client";
import React from "react";
import TypingAnimationDemo from './reviews/reviews.js';
import FadeTextDemo from './main_text/main_text.js';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import RainbowButtonDemo from './buttonn/buttonn.js';
import FeaturesSection from './feature/feature.js';
export default function App() {
  return (
    <div style={{ backgroundColor: "#D9A892", color: "white", minHeight: "100vh" }}>
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
              zIndex: 1,
              borderRadius: "100px", 
              border: "10px solid transparent",
              }}
            title="Background HTML"
          ></iframe>
          
          {/* Render FadeTextDemo and RainbowButtonDemo */}
          <div style={{ textAlign: 'center' ,zIndex: 2}}>
            <FadeTextDemo />
            {/* Add some margin-top to give space between the text and button */}
            <div style={{ marginTop: "200px" ,zIndex: 2}}>
              <RainbowButtonDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Empower Your Future */}

      {/* Featured Courses */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <FeaturesSection></FeaturesSection>
      </Container>

      {/* Testimonials */}
      <Container
        maxWidth="lg"
        sx={{ py: 11, backgroundColor: "#f9f9f9", textAlign: "center", color: "black" }}
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
          &copy; 2024 Maargadarshak. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
