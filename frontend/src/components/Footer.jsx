import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ top: "auto", bottom: 0 }}
        className="bottomNavbar"
      >
        <div className="container">
          <Link to="/"> 
            <BottomNavigationAction
              showLabel
              sx={{ color: "whitesmoke" }}
              label="Home"
              icon={<HomeIcon />}
            />
          </Link>
          <Link to="/explore">
            <BottomNavigationAction
              showLabel
              sx={{ color: "whitesmoke" }}
              label="Explore"
              icon={<ExploreIcon />}
            />
          </Link>
          <Link to="rankings">
            <BottomNavigationAction
              showLabel
              sx={{ color: "whitesmoke" }}
              label="Rankings"
              icon={<LeaderboardIcon />}
            />
          </Link>
          <Link to="account">
            <BottomNavigationAction
              showLabel
              sx={{ color: "whitesmoke" }}
              label="Profile"
              icon={<AccountCircleIcon />}
            />
          </Link>
        </div>
      </BottomNavigation>
    </Paper>
  );
}

export default Footer;
