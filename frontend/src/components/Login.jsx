import React from "react";
import { AppBar, Typography, Toolbar,  Button } from "@mui/material";
import CorpMemph from '../Assets/corpmemph.svg';
import { createTheme } from '@mui/material/styles'
import { Box } from "@mui/system";


export default function Login() {
  return (
    <div position="relative" justifyContent="center" margin-top="500px">
      <div>
        <img src={CorpMemph} alt = "logo" />
      </div>
     
      <Box   
      // component="span"
        m={3}
        display="flex"
        justifyContent="space-around"
        // alignItems="center"
        >
  <Button variant="outlined" color="primary" sx={{ height: 40 }} margin="2">
    Login
  </Button>
  <Button variant="contained" color="primary" sx={{ height: 40 }}>
    Register
  </Button>
  </Box>
    </div>
  );
}
