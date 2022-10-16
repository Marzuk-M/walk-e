import React from "react";
import { AppBar, Typography } from "@mui/material";

export default function Header(props) {
  return (
    <div>
      <AppBar position="static">
          <div position="fixed" className="pageHeading container" align="left">
                <Typography variant="h4" align="left">{props.title}</Typography>
          </div>
      </AppBar>
    </div>
  );
}
