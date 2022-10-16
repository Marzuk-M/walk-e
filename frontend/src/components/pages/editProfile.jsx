import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';


export default function EditProfile() {
  const [firstName, setFirstName] = React.useState('John');
  const [lastName, setLastName] = React.useState('Smith');
  const [email, setEmail] = React.useState('johnsmith123@gmail.com');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleFirstName = (event) => setFirstName(event.target.value)

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Change Credentials
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                onChange={handleFirstName}
                value={firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
              />
            </Grid>
          </Grid>
          <Box
            // component="span"
            m={3}
            display="flex"
            justifyContent="space-around"
          // alignItems="center"
          >
            <Button variant="contained" color="primary" sx={{ height: 40 }}>
              Save
            </Button>
            <Button variant="outlined" color="primary" sx={{ height: 40 }} margin="2">
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}