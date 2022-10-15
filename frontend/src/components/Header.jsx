import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h4">Home</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
