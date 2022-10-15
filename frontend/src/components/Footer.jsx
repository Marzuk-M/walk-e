import React from "react";
import { AppBar, Toolbar } from "@mui/material";

function Footer() {
  return (
    <div>
      <AppBar  position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar className="toolbar"></Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
