import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function EditProfile() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Smith');
  const [email, setEmail] = useState('johnsmith123@gmail.com');

  const handleFirstName = (event) => setFirstName(event.target.value)
  const handleLastName = (event) => setLastName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)

  const navigateBack = () => navigate('account')

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Change Credentials</Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <TextField className="edit-profile-text-field" fullWidth label="First Name" onChange={handleFirstName} value={firstName}/>
            <TextField className="edit-profile-text-field" fullWidth label="Last Name" onChange={handleLastName} value={lastName}/>
            <TextField className="edit-profile-text-field" fullWidth label="Email Address" onChange={handleEmail} value={email}/>
            <TextField className="edit-profile-text-field" fullWidth label="Password" type="password"/>
          </Grid>
          <Box m={3} display="flex" justifyContent="space-around">
            <Button variant="contained" color="primary" sx={{ height: 40 }}>Save</Button>
            <Button variant="outlined" color="primary" sx={{ height: 40 }} onClick={navigateBack}>Cancel</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}