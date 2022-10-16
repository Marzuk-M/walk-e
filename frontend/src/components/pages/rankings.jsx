import React from "react";
import {
  Button,
  ButtonGroup,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  Box,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import userData from "../../data/userData";

const options = [
  "Global Rankings",
  "Rank by Streak",
  "Rank by Challenges",
];

export default function Rankings() {
  const [open, setOpen] = React.useState(false);
  const [currentOption, setCurrentOption] = React.useState(1);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setCurrentOption(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "username", headerName: "Username", width: 90 },
    { field: "rank", headerName: "Rank", width: 80 },
    { field: "points", headerName: "Points", width: 80 },
    { field: "challenges", headerName: "Challenges", width: 80 },
    { field: "streak", headerName: "Streak", width: 80 },
  ];

  const rows = userData.map((user) => ({
    id: user.id,
    username: user.username,
    rank: user.rank.global,
    points: user.challenges.points,
    challenges: user.challenges.totalCompleted,
    streak: user.challenges.streak,
  }));

  return (
    <div className="rankingSection">
      {/* Making the dropdown buttons work as they should. */}
      <div className="btnGroupContainer">
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
        >
          <Button size="large">{options[currentOption]}</Button>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </div>

      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === currentOption}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Box
        className="rankings"
      >
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter="true"
        />
      </Box>
    </div>
  );
}
