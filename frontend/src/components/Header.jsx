import React from "react";
import { AppBar, Typography } from "@mui/material";

export default function Header(props) {
  return (
    <div>
      <AppBar position="static">
          <div className="pageHeading container">
                <Typography className="typography" variant="h4">Page Name</Typography>
          </div>
      </AppBar>
    </div>
  );
}
