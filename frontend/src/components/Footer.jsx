import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

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
          <BottomNavigationAction
            showLabel
            sx={{ color: "whitesmoke" }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            showLabel
            sx={{ color: "whitesmoke" }}
            label="Explore"
            icon={<ExploreIcon />}
          />
          <BottomNavigationAction
            showLabel
            sx={{ color: "whitesmoke" }}
            label="Rankings"
            icon={<LeaderboardIcon />}
          />
          <BottomNavigationAction
            showLabel
            sx={{ color: "whitesmoke" }}
            label="Profile"
            icon={<AccountCircleIcon />}
          />
      </BottomNavigation>
    </Paper>
  );
}

export default Footer;
