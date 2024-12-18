"use client";
import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Box, Typography, Paper, CircularProgress } from '@mui/material';

const Compilers = () => {
  const [language, setLanguage] = useState('c');  // Default language
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = ['c', 'cpp', 'python', 'java'];

  const handleCompile = async () => {
    setIsLoading(true);
    setOutput('');
    setError('');

    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, code }),
      });

      const result = await response.json();
      setOutput(result.output);
      setError(result.error);
    } catch (err) {
      setError('An error occurred while compiling.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        paddingLeft: '300px',  // Moves the whole page 300px from the left
        backgroundColor: '#f7f7f7',  // Light background for a cleaner look
      }}
    >
      <Paper sx={{ width: '80%', maxWidth: '800px', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom align="center">Code Compiler</Typography>

        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <InputLabel id="language-select-label">Select Language</InputLabel>
          <Select
            labelId="language-select-label"
            value={language}
            label="Select Language"
            onChange={(e) => setLanguage(e.target.value)}
            sx={{ backgroundColor: '#fff' }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 3 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
          <Button
            variant="contained"
            color="#000000"
            onClick={handleCompile}
            disabled={isLoading}
            sx={{ width: '200px' }}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Compile'}
          </Button>
        </Box>

        {output && (
          <Box sx={{ backgroundColor: '#e7f4e4', padding: 2, borderRadius: 1 }}>
            <Typography variant="h6">Output:</Typography>
            <pre>{output}</pre>
          </Box>
        )}

        {error && (
          <Box sx={{ backgroundColor: '#f8d7da', padding: 2, borderRadius: 1, marginTop: 2 }}>
            <Typography variant="h6" color="error">Error:</Typography>
            <pre>{error}</pre>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Compilers;
