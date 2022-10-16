import React from "react";
import { AppBar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { routeNameMap } from "../routes";


export default function Header(props) {
  const location = useLocation()
  return (
    <div>
      <AppBar position="static">
        <div className="pageHeading container">
          <Typography className="typography" variant="h4">{routeNameMap.get(location.pathname)}</Typography>
        </div>
      </AppBar>
    </div>
  );
}
