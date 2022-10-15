import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2">Home</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
