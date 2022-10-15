import React from "react";
import { AppBar, Toolbar } from "@mui/material";

function Footer() {
  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
