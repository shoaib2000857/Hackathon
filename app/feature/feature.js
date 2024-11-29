import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)', // Slight zoom effect on hover
    boxShadow: theme.shadows[5], // Add shadow effect on hover
  },
}));

export default function FeaturesSection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={5}
        sx={{
          '& .MuiGrid-item': {
            transition: 'transform 0.3s ease', // Smooth transition for all items
          },
          '&:hover .MuiGrid-item': {
            transform: 'scale(0.95)', // Shrink other items when one is hovered
          },
          '&:hover .MuiGrid-item:hover': {
            transform: 'scale(1.05)', // Keep the hovered item scaled up
          }
        }}
      >
 <Grid item xs={12}>
  <h2 className="text-center text-3xl font-bold">Features</h2>
</Grid>
{/* First Feature with Circle Scaling on Hover */}
<Grid item xs={12} sm={6} md={3}>
  <Item
    className="rounded-lg shadow-md hover:scale-105 transition-all group hover:z-30 relative overflow-hidden"
    style={{ zIndex: 12121 }}
  >
    {/* Circle as background */}
    <div
      className="absolute top-[-24px] left-[-20px] rounded-full bg-gray-800 group-hover:scale-[30] transition-transform duration-500 ease-in-out"
      style={{
        width: '26px', // Initial diameter of the circle
        height: '26px', // Initial diameter of the circle
        zIndex: -1, // Keeps it behind the content
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 p-4">
      <h3 className="text-xl font-semibold mb-2">First Feature</h3>
      <p className="text-gray-600 text-sm">
        This is the description of the first feature of our app. We are going to briefly outline what this feature does.
      </p>
      <Button variant="contained" className="mt-4">
        Know more
      </Button>
    </div>
  </Item>
</Grid>
<Grid item xs={12} sm={6} md={3}>
  <Item
    className="rounded-lg shadow-md hover:scale-105 transition-all group hover:z-30 relative overflow-hidden"
    style={{ zIndex: 12121 }}
  >
    {/* Circle as background */}
    <div
      className="absolute top-[-24px] left-[-20px] rounded-full bg-gray-800 group-hover:scale-[30] transition-transform duration-500 ease-in-out"
      style={{
        width: '26px', // Initial diameter of the circle
        height: '26px', // Initial diameter of the circle
        zIndex: -1, // Keeps it behind the content
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 p-4">
      <h3 className="text-xl font-semibold mb-2">First Feature</h3>
      <p className="text-gray-600 text-sm">
        This is the description of the first feature of our app. We are going to briefly outline what this feature does.
      </p>
      <Button variant="contained" className="mt-4">
        Know more
      </Button>
    </div>
  </Item>
</Grid>
<Grid item xs={12} sm={6} md={3}>
  <Item
    className="rounded-lg shadow-md hover:scale-105 transition-all group hover:z-30 relative overflow-hidden"
    style={{ zIndex: 12121 }}
  >
    {/* Circle as background */}
    <div
      className="absolute top-[-24px] left-[-20px] rounded-full bg-gray-800 group-hover:scale-[30] transition-transform duration-500 ease-in-out"
      style={{
        width: '26px', // Initial diameter of the circle
        height: '26px', // Initial diameter of the circle
        zIndex: -1, // Keeps it behind the content
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 p-4">
      <h3 className="text-xl font-semibold mb-2">First Feature</h3>
      <p className="text-gray-600 text-sm">
        This is the description of the first feature of our app. We are going to briefly outline what this feature does.
      </p>
      <Button variant="contained" className="mt-4">
        Know more
      </Button>
    </div>
  </Item>
</Grid>
<Grid item xs={12} sm={6} md={3}>
  <Item
    className="rounded-lg shadow-md hover:scale-105 transition-all group hover:z-30 relative overflow-hidden"
    style={{ zIndex: 12121 }}
  >
    {/* Circle as background */}
    <div
      className="absolute top-[-24px] left-[-20px] rounded-full bg-gray-800 group-hover:scale-[30] transition-transform duration-500 ease-in-out"
      style={{
        width: '26px', // Initial diameter of the circle
        height: '26px', // Initial diameter of the circle
        zIndex: -1, // Keeps it behind the content
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 p-4">
      <h3 className="text-xl font-semibold mb-2">First Feature</h3>
      <p className="text-gray-600 text-sm">
        This is the description of the first feature of our app. We are going to briefly outline what this feature does.
      </p>
      <Button variant="contained" className="mt-4">
        Know more
      </Button>
    </div>
  </Item>
</Grid>
      </Grid>
    </Box>
  );
}
