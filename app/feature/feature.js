import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[5],
  },
}));

export default function FeaturesSection() {
  const features = [
    {
      title: 'Teacher-Student Interactions',
      description: 'Your Intelligent Study Companion Providing Crystal-Clear Explanations, Comprehensive Step-by-Step Solutions, and Tailored Personalized Learning Tips',
      circleColor: 'bg-blue-500'
    },
    {
      title: 'AI driven learning',
      description: 'A Collaborative, Inclusive Space Where Students Connect, Share Knowledge, Exchange Insights, and Find Inspiring Encouragement Throughout Their Educational Journey',
      circleColor: 'bg-green-500'
    },
    {
      title: 'Supportive Community',
      description: 'Dynamically Generate Personalized Assessments That Precisely Target Specific Learning Topics, Meticulously Track Individual Progress, and Systematically Enhance Subject Understanding',
      circleColor: 'bg-purple-500'
    },
    {
      title: 'Custom Quizzes',
      description: 'Empowers Educators to Efficiently Post Grades, Share Real-Time Announcements, and Maintain Transparent Communication, Keeping Students Consistently Informed and Organized',
      circleColor: 'bg-red-500'
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container 
        spacing={2} 
        justifyContent="center" 
        alignItems="stretch"
        mt={5}
      >
        <Grid item xs={12}>
          <h2 className="text-center text-3xl font-bold mb-4">Features</h2>
        </Grid>

        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title} className="h-full">
            <Item className="group relative">
              {/* Circle Effect */}
              <div 
                className={`absolute top-1 left-1 w-7 h-7 rounded-full ${feature.circleColor} 
                  transition-all duration-700 ease-in-out 
                  group-hover:scale-[30] group-hover:opacity-90`}
                style={{
                  zIndex: 1,
                  transformOrigin: 'center',
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}