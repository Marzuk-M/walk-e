import React from "react";
import { AppBar, Typography } from "@mui/material";

export default function Header() {
  return (
    <div>
      <AppBar position="static">
          <div className="pageHeading container">
                <Typography variant="h4">Hello</Typography>
          </div>
      </AppBar>
    </div>
  );
}
